#### How to run visual tests

* You gonna need Docker installed and running
* `npm run gemini:fix` - this will run all visual tests and compare them to there snapshots. It could take a long time,
  and also the changes that you made may not have effect at every test. Better solution will be to run only the effected sets.
  `npm run gemini:fix set2 set4`
* Verify that the screenshots which you will find as modified in your git changes reflect the changes you intended.
* Commit and push the updated screenshots. This is enough to trigger our CI builds again.

#### How to rebase my PR

When `target-branch` is the branch that we want to rebase against.

For example:

```bash
# Current branch feat/dropdown
$ git checkout feat/dropdown
$ git rebase master -i
# Interactive update and fix rebase conflicts if any
$ git push --force
```

You could check the log after that

```bash
$ git log
```
