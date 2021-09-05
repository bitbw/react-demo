/*
 * @Description: 评论
 * @LastEditors: zhangbowen
 * @LastEditTime: 2021-09-04 17:48:29
 */


import React from 'react'



export class Comment extends React.Component {
    constructor(props) {
        super(props)
        console.log("Bowen ~ file: comment.js ~ line 13 ~ Comment ~ constructor ~ thisprops", this.props)
        this.state = {
            userName: "",
            userComment: "",
            commentList: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handlePublish = this.handlePublish.bind(this)
    }
    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    handlePublish() {
        const { userName, userComment, commentList } = this.state
        if (userName.trim() === "" || userComment.trim() === "") {
            alert("请输入")
            return
        }
        this.setState({
            commentList: [
                {
                    id: Math.random() * Date.now(),
                    userName,
                    userComment
                },
                ...commentList
            ],
            userName: "",
            userComment: ""
        })
    }
    renderList() {
        const { commentList } = this.state
        if (commentList.length) {
            return commentList.map((item) => {
                return (
                    <ul key={item.id}>
                        <li>
                            <h5>{item.userName}</h5>
                            <div>{item.userComment}</div>
                        </li>
                    </ul>
                )
            })
        }
        return (<div>暂无评论</div>)
    }


    render() {
        const { userName, userComment } = this.state
        return (
            <div className="comment-container">
                <input name="userName" type="text" value={userName} onChange={this.handleChange} ></input><br />
                <textarea name="userComment" value={userComment} onChange={this.handleChange}></textarea><br />
                <button onClick={this.handlePublish}>发表评论</button>
                {this.renderList()}
            </div>
        )
    }

}
