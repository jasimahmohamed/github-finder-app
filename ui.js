class UI {
  constructor() {
    this.profile = document.getElementById('profile')
  }
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="username">
        <h3>${user.login}</h3>
        </div>
      <div class="row">
        <div class="col-md-3  d-grid mb-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-lg btn-primary">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge bg-primary mb-1">Public Repos: ${user.public_repos}</span>
          <span class="badge bg-secondary mb-1">Public Gists: ${user.public_gists}</span>
          <span class="badge bg-success mb-1">Followers: ${user.followers}
          </span>
          <span class="badge bg-info mb-1">Following: ${user.following}
          </span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
        </div>  
      </div>    
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `
  }
  showRepos(repos) {
    let output = ''
    repos.forEach(repo => {
      output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <span class="badge bg-primary mb-1">Stars: ${repo.stargazers_count}</span>
            <span class="badge bg-secondary mb-1">Watchers: ${repo.watchers_count}</span>
            <span class="badge bg-success mb-1">Forks: ${repo.forks_count}
            </span>
          </div>
        </div>
      </div>
      `
    })
    document.getElementById('repos').innerHTML = output
  }
  showAlert(message, className) {
    this.clearAlert()
    //create div
    const div = document.createElement('div')
    //add classes
    div.className = className
    //add message
    div.appendChild(document.createTextNode(message))
    //get parent
    const container = document.querySelector('.searchContainer')
    //get search box
    const search = document.querySelector('.search')
    //insert after
    container.insertBefore(div, search)
    //timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert()
    }, 2000)
  }
  clearAlert() {
    const currentAlert = document.querySelector('.alert')
    if (currentAlert) {
      currentAlert.remove()
    }
  }
  clearProfile() {
    this.profile.innerHTML = ''
  }
}