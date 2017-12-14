import React, {Component} from 'react';

class CommentSection extends Component {
    constructor(props){
        super(props);
        this.submitComment = this.submitComment.bind(this);
        this.state = {
            commentList: null
        }
    }
    componentWillMount() {
        this.getComments(this.props.recipeSite)
    }
    getComments(recipeSite) {
        return fetch('src/server/util/comments.php?recipe=' + this.props.recipeSite)
        .then((response) => {
            response.json().then((data) => {
                this.setState({
                    commentList: data
                })
            })
        }
        )
        .catch(error => console.error(error))
    }
    submitComment(event) {

    }
    render() {
        return (
        <div className="comments--wrapper">
            <div>
                <h2>Comment section - Give your feedback!</h2>
                <form onSubmit={this.submitComment}>
                    <input type='hidden' name='uid' value={this.props.userData && this.props.userData.uid} />
                    <input type='hidden' name='date' value={new Date('Y-m-d H:i:s')} />
                    <textarea name='message'></textarea>
                    <input type='submit' name='commentSubmit'/>
                </form>
            </div>
            {
                this.state.commentList
                ? 
                    <ul className='comments-list' id='comments'>
                        <div className='comment'>
                        
                        {this.state.commentList.map((item) => {
                            return(
                                <div>
                                <h5>{item.uid}</h5>
                                <p>{item.date}</p>
                                <p>{item.message}</p>
                                </div>
                            )
                        })}
                        </div>
                    </ul>
                :   <div></div>
            }
        </div>
        )
    }
}

export default CommentSection;