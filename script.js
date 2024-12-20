// Dark Mode 
const DLText = document.querySelector("[data-DarkLight]");
const DLButton = document.querySelector("[btn-DLBtn]");
const DLImage = document.querySelector("[DLImg]");
const DarkContainers = document.querySelectorAll("[darkLight]");
const DarkContainerCheck = document.querySelector("[darkLight]");
const search = document.querySelector(".search");
initialPage();

DLButton.addEventListener('click', renderDarkLightElements);
function renderDarkLightElements() {
    if (!DarkContainerCheck.classList.contains("dark")) {
        for (const el of DarkContainers) {
            el.classList.add("dark");
        };
        DLText.textContent = 'Light';
        DLImage.setAttribute("src", "assets/sun.png")
    }
    else {
        for (const el of DarkContainers) {
            el.classList.remove("dark");
        };
        DLText.textContent = 'Dark';
        DLImage.setAttribute("src", "assets/moon.png")
    }

}
// initial page

function initialPage() {

    search.classList.add("active");
}

// search functionality

const searchButton = document.querySelector("[btn-toSearch]");
const searchData = document.querySelector("[data-toSearch]");
const loading = document.querySelector(".loading");
const userInfoCard = document.querySelector(".userDetails");
const notFound = document.querySelector(".notFound");

searchButton.addEventListener('click', fetchUserData);
async function fetchUserData() {
    notFound.classList.remove("active");
    search.classList.remove("active");
    loading.classList.add("active");
    const userToSearch = searchData.value;
    const response = await fetch(`https://api.github.com/users/${userToSearch}`);
    if (response.ok) {
        const data = await response.json();
        renderUserInfo(data);
        loading.classList.remove("active");
        userInfoCard.classList.add("active");
    }
    else {
        loading.classList.remove("active");
        notFound.classList.add("active");
    }
}
//render info card
const profileImage = document.querySelector('[img-profileImage]');
const userName = document.querySelector('[data-userName]');
const joinDate = document.querySelector('[data-joinDate]');
const userID = document.querySelector('[data-userID]');
const userIDLink = document.querySelector('[data-userIDLink]');
const description = document.querySelector('[data-description]');
const repoNum = document.querySelector('[data-repoNum]');
const followers = document.querySelector('[data-followers]');
const following = document.querySelector('[data-following]');
const locate = document.querySelector('[data-location]');
const link = document.querySelector('[data-link]');
const twitter = document.querySelector('[data-twitter]');
const office = document.querySelector('[data-office]');
function renderUserInfo(data) {
    profileImage.setAttribute("src", `${data?.avatar_url}`);


    userName.textContent = data?.login === null ? data?.login : data?.login;
    joinDate.textContent = parseDate(data?.created_at);
    userID.textContent = data?.login;
    userIDLink.setAttribute("href", data?.html_url);

    description.textContent = data?.bio === null ? 'Not Available' : data?.bio;

    repoNum.textContent = data?.public_repos === null ? 0 : data?.public_repos;
    followers.textContent = data?.followers === null ? 0 : data?.followers;
    following.textContent = data?.following === null ? 0 : data?.following;

    locate.textContent = data?.location === null ? 'Not Available' : data?.location;
    if(data?.repos_url!==null){
        link.textContent = "Repositery";
        twitter.setAttribute('href', `${data?.repos_url}`);
    }
    else{
        link.textContent ='Not Available';
    }
    if (data?.twitter_username !== null) {
        twitter.textContent = data?.twitter_username;
        twitter.setAttribute('href', `https://x.com/${data?.twitter_username}`);
    }
    else{
        twitter.textContent = "Repositery";
    }
    office.textContent = data?.company === null ? 'Not Available' : data?.company;



}
function parseDate(dateString) {
    const dateObject = new Date(dateString);
    return `${dateObject.getDate()} ${dateObject.toLocaleString('default', { month: 'short' })} ${dateObject.getYear()}`;
}