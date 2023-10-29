({
  onWillParseMarkdown: async function (markdown) {
    markdown = markdown.replace(/:::danger[\s\S]*?:::/gm, (danger_alert) => {
      danger_alert =
        '<div class="alert alert-danger">\n' + danger_alert.slice(9);
      danger_alert = danger_alert.slice(0, -3) + "</div>";
      return danger_alert;
    });

    markdown = markdown.replace(/:::success[\s\S]*?:::/gm, (success_alert) => {
      success_alert =
        '<div class="alert alert-success">\n' + success_alert.slice(10);
      success_alert = success_alert.slice(0, -3) + "</div>";
      return success_alert;
    });

    markdown = markdown.replace(/:::info[\s\S]*?:::/gm, (info_alert) => {
      info_alert = '<div class="alert alert-info ">\n' + info_alert.slice(7);
      info_alert = info_alert.slice(0, -3) + "</div>";
      return info_alert;
    });

    markdown = markdown.replace(/:::warning[\s\S]*?:::/gm, (warning_alert) => {
      warning_alert =
        '<div class="alert alert-warning">\n' + warning_alert.slice(10);
      warning_alert = warning_alert.slice(0, -3) + "</div>";
      return warning_alert;
    });

    return markdown;
  },

  onDidParseMarkdown: async function (html) {
    return html;
  },

  onWillTransformMarkdown: async function (markdown) {
    return markdown;
  },

  onDidTransformMarkdown: async function (markdown) {
    return markdown;
  },

  processWikiLink: function ({ text, link }) {
    return {
      text,
      link: link ? link : text.endsWith(".md") ? text : `${text}.md`,
    };
  },
});