import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["content"];

  static values = {
    posts: {
      type: Array,
      default: [
        {
          title: "Loading state",
        },
      ],
    },
  };

  connect() {
    this.loadResource();
  }

  loadResource() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => (this.postsValue = json));
  }

  postsValueChanged(value) {
    alert("loading state");
    this.contentTarget.innerHTML = value.map((e) => e.title).join("\n");
  }
}
