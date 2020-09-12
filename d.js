class BlogList {
    constructor() {
        this.list = document.querySelector('#timeline-Viewport li');
        this.render();
    }
    render() {
        //alert(this.list.href)
        this.list.innerHTML = 'a'
    }
}
const blogList = new BlogList();