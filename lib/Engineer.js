function Engineer(name, id, email, github) {
    this.github = github;
};

Engineer.prototype.getRole = function () {
    return "Engineer";
};

Engineer.prototype.getGithub = function () {
    return this.github;
};

module.exports = Engineer;