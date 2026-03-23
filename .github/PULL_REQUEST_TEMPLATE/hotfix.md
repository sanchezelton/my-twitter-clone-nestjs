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
