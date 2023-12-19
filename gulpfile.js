const glob = require("glob");
const mocha = require("gulp-mocha");
const gulp = require("gulp");
const del = require("del");
const gutil = require("gulp-util");
const tslint = require("gulp-tslint");
const libtslint = require("tslint");
const runSequence = require("run-sequence");
const sourcemaps = require("gulp-sourcemaps");
const ts = require("gulp-typescript");

const srcPath = "src";
const testPath = "test";
const integrationTestPath = "integrationTest";

const sources = [srcPath, testPath, integrationTestPath].map(
	(tsFolder) => `${tsFolder}/**/*.ts`,
);

let lintSources = [srcPath, testPath, integrationTestPath].map(
	(tsFolder) => `${tsFolder}/**/*.ts`,
);
lintSources = lintSources.concat(["!src/api/appcenter/generated/**"]);

gulp.task("tslint", () => {
	const program = libtslint.Linter.createProgram("./tsconfig.json");
	return gulp
		.src(lintSources, { base: "." })
		.pipe(
			tslint({
				formatter: "verbose",
				program: program,
			}),
		)
		.pipe(tslint.report());
});

gulp.task("clean", () => {
	const pathsToDelete = [
		"src/**/*.js",
		"!src/api/appcenter/generated/**/*.js",
		"src/**/*.js.map",
		"test/**/*.js",
		"test/**/*.js.map",
		"integrationTest/*.js",
		"integrationTest/*.js.map",
		"out/",
		".vscode-test/",
	];
	return del(pathsToDelete, { force: true });
});

gulp.task("build", (callback) => {
	const tsProject = ts.createProject("tsconfig.json");
	// var isProd = false; // TODO: determine
	// var preprocessorContext = isProd ? { PROD: true } : { DEBUG: true };
	return (
		tsProject
			.src()
			// .pipe(preprocess({ context: preprocessorContext })) //To set environment variables in-line
			.pipe(sourcemaps.init())
			.pipe(tsProject())
			.on("error", (e) => {
				if (callback) {
					callback(e);
					callback = null;
				}
			})
			.pipe(
				sourcemaps.write(".", {
					includeContent: false,
					sourceRoot: ".",
				}),
			)
			.pipe(gulp.dest((file) => file.cwd))
	);
});

gulp.task("test", (callback) => {
	const tsProject = ts.createProject("tsconfig.json");
	tsProject.config.files = glob.sync("./test/**/*.ts");

	const globalMochaSettings = {
		clearRequireCache: true,
		ignoreLeaks: false,
		timeout: 5000,
		slow: 200,
		reporter: "spec",
	};

	const testFiles = tsProject.config.files.slice();
	for (let i = 0; i < testFiles.length; i++) {
		testFiles[i] = testFiles[i].replace(/.ts$/i, ".js");
	}

	gulp.src(testFiles)
		.pipe(mocha(globalMochaSettings))
		.once("error", (err) => {
			if (callback) {
				callback(err);
				callback = null;
			}
		})
		.once("end", () => {
			if (callback) {
				callback();
				callback = null;
			}
		});
});

gulp.task("debug", (callback) => {
	runSequence("clean", "build", callback);
});

gulp.task("default", (callback) => {
	runSequence("clean", "build", "tslint", "test", callback);
});
