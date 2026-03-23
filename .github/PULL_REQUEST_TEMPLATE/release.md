## Release Pull Request

### Description

Please include a summary of the change and which issue(s) is/are fixed. Please also include relevant motivation and context.

### Related Issues

This can be copied from the Unreleased section of CHANGELOG.md

### Testing

Describe the tests that you ran to verify your changes (unit tests, manual testing, etc.).
Provide instructions so the testing may be reproduced if necessary.

### ⚠️ Impact Assessment

- Are there any potential side effects or areas of the application that might be impacted?
- Any specific monitoring required after deployment?
- Are known side effects and impacts documented in the release notes?

### Release checklist

- [ ] Create a new branch from the current `develop` branch named `release-x.y.z`
- [ ] Create an issue ticket for the release.
- [ ] Code is well-documented and follows coding standards.
- [ ] Tests added cover new functionality.
- [ ] All existing tests pass.
- [ ] Features work as described.
- [ ] Bump either major or minor version in package.json and CHANGELOG.md. Reset any
      patch version to zero. Zero also resets for minor upon major releases.
- [ ] Update CHANGELOG.md to move all tickets in [Unreleased] section into a new section
      [#release-x.y.z] for the release. The release ticket need not be included.
- [ ] Update release notes as necessary.
- [ ] Commit changes and push to update `release-x.y.z` branch and open PR.
- [ ] Add tags to branch to identify release via tag, i.e. `v1.2.3` or `v2.0.0-beta.1`
- [ ] Confirm PR targets merge into a `release-x.y.z` branch, reflecting above bump.
- [ ] Create a new PR targeting `master`, originating with `release-x.y.z` branch.
- [ ] Perform review, then merge when approved.
- [ ] Post merge, pull changes to `master` and `release-x.y.z` from each respective
      branch from the remote repo to local repo.

### 🔍 Reviewer Checklist

- [ ] Code addresses the reported bug effectively.
- [ ] Changes are minimal and directly related to the hotfix.
- [ ] Adequate testing has been performed.
- [ ] No new regressions are introduced.
- [ ] Documentation, release notes and changelog in particular, are updated and address
      the features for the release.
- [ ] For the release branch PR, review that all release requirements are met, documentation is up to date, and the release process has been followed.
- [ ] Confirm release is targeted to a master branch.
