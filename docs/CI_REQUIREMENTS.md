# BP-INT-004 — QA POC CI Requirements

## Purpose

This document records the requirements for running the BlockPay QA Proof of Concept locally and in a CI environment.

The POC uses placeholder applications and does not contain BlockPay production business logic.

This proof of concept is discovery work intended to validate the suitability of the selected automated-testing tools. It does not define or enforce the production testing architecture for BlockPay. Any production integration, test conventions, CI configuration, or adoption decisions should be reviewed with the development team.

## 1. Web POC — Playwright

### Requirements
- Node.js
- npm
- Playwright
- Playwright browser binaries

### Local Command

```bash
cd web
npm install
npx playwright install
npx playwright test
```

### CI Requirements

A CI runner will need:
- Node.js
- npm dependencies
- Playwright browsers and system dependencies
- Storage for test reports and failure artifacts

Recommended CI installation command:

```bash
npx playwright install --with-deps
```

## 2. Backend API POC — Vitest + Supertest

### Requirements
- Node.js
- npm
- Vitest
- Supertest
- Express

### Local Command

```bash
cd api
npm install
npx vitest run
```

### CI Requirements

A CI runner will need:
- Node.js
- npm dependencies

The POC does not require a separate backend server because Supertest tests the Express application directly.

## 3. Mobile POC — Expo + Maestro

### Requirements
- Node.js and npm
- Expo
- Java 17
- Android SDK
- ADB
- Android emulator or physical Android device
- Maestro CLI

### Local Setup

The mobile proof of concept uses a simple Expo application containing:
- BlockPay Mobile QA POC
- Mobile automation is working.

The Maestro smoke test is stored at:

```text
mobile/.maestro/smoke.yaml
```

### CI Requirements

A mobile CI environment would need:
- Java 17 or later
- Android SDK
- ADB
- Maestro CLI
- Android emulator or compatible Android device
- Sufficient CPU and memory to run the emulator reliably
- The application installed and available before the Maestro test runs

For iOS testing, a macOS CI runner and iOS simulator would be required.

### Environment Limitation

The mobile automation POC was attempted locally.

Maestro 2.10.0 was successfully installed and the Android emulator was detected by ADB as `emulator-5554`. A fresh Android 14 / API 34 emulator was also created, and Android reported `sys.boot_completed=1`.

The Expo placeholder application was created successfully and Metro Bundler started successfully.

However, the Android emulator repeatedly displayed `Process system isn't responding`, preventing a stable Maestro test execution.

The Maestro smoke-test flow was therefore created, but a successful Maestro UI test execution is not claimed.

## Proposed Production Test Conventions

As this POC is discovery work, the following are recommendations for future consideration:

- Keep web, API, and mobile automated tests separated by test layer.
- Use clear test names that describe the expected behaviour.
- Keep smoke tests small and focused on critical functionality.
- Avoid hard-coded credentials, secrets, and environment-specific values.
- Retain useful failure artifacts such as reports, screenshots, videos, and traces where supported.
- Keep tests independent so that one test failure does not unnecessarily affect others.

These conventions are proposals only and should be reviewed and agreed with the development team before being adopted or enforced in the BlockPay production environment.