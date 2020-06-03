const axios = require("axios")
const mongoose = require("mongoose")
const Fellow = require("../models/fellow")

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

axios.default.get("https://api.github.com/organizations/65834464/teams", {
    headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN} `
    }
}).then((res) => Promise.all(res.data.map((team) => {
    return axios.default.get(`https://api.github.com/organizations/65834464/team/${team.id}/members`, {
        headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`
        }
    }).then(res => ({ team, member: res.data }))
}))).then(data => Promise.all(data.map(value => {
    return Promise.all(value.member.map((mem) => {
        new Fellow({
            username: mem.login,
            pod: value.team.name,
            podId: value.team.id
        }).save()
    }))
}))).then(process.exit(0))