import { Application } from 'probot' // eslint-disable-line no-unused-vars

export = (app: Application) => {
  app.on('issues.opened', async (context) => {
    const issueComment = context.issue({ body: `你好 @${context.payload.issue.user.login}，感谢您打开了这个 issue !` });
    await context.github.issues.createComment(issueComment)
  })
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
