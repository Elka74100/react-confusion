import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';



    function RenderDish (dish) {
        if (dish!= null)
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
        else
        return(
            <div></div>
        );
    }

    function RenderComments (comments) {
        if (comments!=null) {

        const listOfComments = comments.comments.map((comment)=>{
            return (
                <ul class = "list-unstyled">
                    <li>{comment.comment}</li>
                    <li>-- {comment.author}, {comment.date}</li>
                </ul>
            )
        });
        return(
            <div>
                <h4>Comments</h4>
                <div>{listOfComments}</div>
            </div>
        );
        }

    }

    const DishDetail = (props) => {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {RenderDish(props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {RenderComments(props.dish)}
                    </div>
                </div>
            </div>
        )
    }


export default DishDetail;