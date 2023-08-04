const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user) {
        this.userProfile.innerHTML = `
            <div class=info>
                <img src= "${user.avatarUrl}" alt="Foto do perfil do usuário">
                <div class="data">
                    <h1>${user.name ?? "Não possui nome cadastrado 😢"}</h1>
                    </br>
                    <p>${user.bio ?? "Não possui bio cadastrada 😢"}</p>
                    <p style="display: inline">Seguidores: ${
                        user.followers
                    } |</p>
                    <p style="display: inline">Seguindo: ${user.following}</p>
                </div>
            </div>`;

        let repositoriesItens = "";
        user.repositories.forEach(
            (repo) =>
                (repositoriesItens += `
                <li>
                <a href="${repo.html_url} target "_blank" ">${repo.name}
                    <p></p><br>
                    <p class = "count">🍴${repo.forks_count}</p>
                    <p class = "count">⭐${repo.stargazers_count}</p>
                    <p class = "count">👀${repo.watchers_count}</p>
                    <p class = "count">👨‍💻${repo.language}</p>
                    
                </a><li>
                `)
        );

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                <h2>Repositórios</h2>
                <ul>
                    <li>${repositoriesItens}</li>
                </ul>
            </div>`;
        }

        let eventItens = "";
        user.events.forEach(
            (event) =>
                (eventItens += `
                    <h3 style="display: inline">${event.repo.name} - ${event.payload.commits[0].message} </h3>
                    `)
        );

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class = events section>
                <h2>Eventos</h2>
                <ul>
                    <li>${eventItens}</li>
                </ul>
            </div>`;
        }
    },

    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado!</h3>";
    },
};

export { screen };
