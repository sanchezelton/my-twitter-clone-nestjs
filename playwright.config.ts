import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './test',
  testMatch: '**/*.pw.e2e.spec.ts',
  timeout: 30_000,
  fullyParallel: false,
  workers: 1,
  reporter: 'list',
});
