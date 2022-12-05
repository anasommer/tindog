class Dog {
  constructor(data) {
    Object.assign(this, data);
  }
  createDogHtml() {
    const { name, avatar, age, bio } = this;
    return `
    <img src="${avatar}" alt="dog image" class="profile-img" />
    <span id="dog-signature">
      <h2 class="dog-name">${name}, ${age}</h2>
      <p class="dog-bio">${bio}</p></span
    >
 
            `;
  }
}

export default Dog;
