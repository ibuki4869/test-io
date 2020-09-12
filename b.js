class BlogList {
    constructor() {
        this.list = document.getElementById('message');
        this.render();
    }
    render() {
        //alert(this.list.href)
        this.list.innerHTML = '<iframe src="c.html" width="300" height="550" allowfullscreen> </iframe>'
    }
}
const blogList = new BlogList();