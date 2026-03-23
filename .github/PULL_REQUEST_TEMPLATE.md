###### Choose one of the following pull request types and delete the rest

---

## Feature Pull Request

### Description

Please provide a clear and concise description of the new feature. What problem does it solve? What is the user story?

### Related Issue

Link to the issue this feature addresses: #IssueNumber

### Changes Made

- List the key changes introduced by this feature.
- Explain the implementation details if necessary.

### How Has This Been Tested?

Describe the tests you've performed to ensure the feature works as expected.

- [ ] Unit tests
- [ ] Integration tests
- [ ] Manual testing (provide steps)

### Definition of Done Checklist

- [ ] Code is well-documented and follows coding standards.
- [ ] Tests added cover new functionality.
- [ ] All existing tests pass.
- [ ] Relevant documentation has been updated, in changelog at minimum.
- [ ] Feature works as described.
- [ ] Confirm PR targets merge into `develop` branch.
- [ ] Post-merge, pull changes in `develop` branch from remote repo into local repo.

---

## Bug Fix Pull Request

### Description

Please include a summary of the change and which issue(s) is/are fixed. Please also include relevant motivation and context.

If your pull request fixes an open issue, link it using a keyword (e.g., `Closes #123` or `Fixes #456`).

### Related Issues

Please delete relations that are not relevant.

Fixes # (issue number)
Related to # (issue number)
Unblocks # (issue number)

### Type of change

Please delete change types that are not relevant.

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Other (please describe):

### Definition of Done Checklist

- [ ] Code is well-documented and follows coding standards.
- [ ] All existing tests pass.
- [ ] Changes to fix the bug are present.
- [ ] Relevant documentation (if any) has been updated.
- [ ] Tests added demonstrating bug fix is effective or that the related feature works.
- [ ] Confirm PR targets merge into `develop` branch.
- [ ] No other open Pull Requests present for the same update/change.
- [ ] Post-merge, pull changes in `develop` branch from remote repo into local repo.

### Testing

Describe the tests that you ran to verify your changes. Provide instructions so we can reproduce the testing if necessary.

### Screenshots (if applicable)

---

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

---

## Hotfix Pull Request

### Description

Please include a summary of the change and which issue(s) is/are fixed. Please also include relevant motivation and context.

- Describe the bug or issue this hotfix addresses.

### Related Issues

Please delete relations that are not relevant.

Fixes # (issue number)
Related to # (issue number)
Unblocks # (issue number)

### Testing

Describe the tests that you ran to verify your changes (unit tests, manual testing, etc.).
Provide instructions so the testing may be reproduced if necessary.

### ⚠️ Impact Assessment

- Are there any potential side effects or areas of the application that might be impacted?
- Any specific monitoring required after deployment?
- Are known side effects and impacts documented in the release notes?

### Hotfix checklist

- [ ] Code is well-documented and follows coding standards.
- [ ] Tests added cover new functionality.
- [ ] All existing tests pass.
- [ ] Documentation, release notes and changelog in particular, have been updated.
- [ ] Feature works as described.
- [ ] Create a new branch from the current release branch, bumping patch version by 1.
- [ ] Confirm bump to patch version `x.y.z` in package.json and in changelog
- [ ] Confirm PR targets merge into a `release-x.y.z` branch, reflecting above bump

### 🔍 Reviewer Checklist

- [ ] Code addresses the reported bug effectively.
- [ ] Changes are minimal and directly related to the hotfix.
- [ ] Adequate testing has been performed.
- [ ] No new regressions are introduced.
- [ ] Documentation, release notes and changelog in particular, are updated and address
      hotfix.
- [ ] Confirm hotfix is targeted to a release branch.

---

# Documentation Pull Request

## Description

Please include a summary of the change and what documentation(s) are added, removed, or
fixed. Please also include relevant motivation and context.

## Changes Made

- A bulleted list of the items added
- An edited summary of what is in the commit logs would be appropriate.

## Definition of Done Checklist

~- [ ] Tests added cover new functionality.~
~- [ ] All existing tests pass.~
~- [ ] Feature works as described.~

- [ ] Code is well-documented ~and follows coding standards.~
- [ ] Relevant documentation has been updated, in changelog at minimum.
- [ ] Confirm PR targets merge into `develop` branch.
- [ ] Post-merge, pull changes in `develop` branch from remote repo into local repo.
