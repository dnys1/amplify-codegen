import software.amazon.smithy.gradle.tasks.SmithyBuild
import software.amazon.smithy.gradle.tasks.Validate

plugins {
  kotlin("jvm") version "1.8.0"
  id("software.amazon.smithy") version "0.7.0"
}

val codegen: Configuration by configurations.creating
dependencies {
  codegen("software.amazon.smithy.typescript:smithy-typescript-codegen:0.17.1")
  codegen("software.amazon.smithy.typescript:smithy-aws-typescript-codegen:0.17.1")
  codegen("software.amazon.smithy:smithy-cli:[1.33.0,1.34.0[")
}

repositories {
    mavenLocal()
    mavenCentral()
}

dependencies {
    implementation("software.amazon.smithy:smithy-model:[1.33.0,1.34.0[")
    implementation("software.amazon.smithy:smithy-aws-traits:[1.33.0,1.34.0[")
}

val generateSdk = tasks.register<SmithyBuild>("generateSdk") {
  group = "codegen"
  classpath = codegen
  inputs.file(projectDir.resolve("smithy-build.json"))
  inputs.files(codegen)
}

val copySdk = tasks.register<Copy>("copySdk") {
  group = "codegen"
  dependsOn(generateSdk)
  from(projectDir.resolve("build/smithyprojections/appsync-modelgen-build/source/typescript-codegen"))
  into(projectDir.resolve("../appsync-modelgen-core"))
}

val buildSdk = tasks.register("buildSdk") {
  group = "codegen"
  dependsOn(copySdk)
}

tasks["smithyBuildJar"].enabled = false

tasks.named<Validate>("smithyValidate") {
  classpath = codegen
}

kotlin {
  jvmToolchain(17)

  sourceSets.getByName("main") {
    kotlin.srcDirs("model", "src/main/smithy")
  }
}
