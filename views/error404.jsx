const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/cute-puppy.jpg" alt="A Puppy" width="400px" height="auto" />
                    <div>
                        Photo by <a href="https://unsplash.com/@_redo_?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">T.R Photography 📸</a> on <a href="https://unsplash.com/photos/long-coated-white-and-brown-puppy-TzjMd7i5WQI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}


module.exports = error404
