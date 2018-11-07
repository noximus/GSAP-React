import React, { Component } from "react";
import { TimelineLite, CSSPlugin } from "gsap/all";
import { dataArray } from "./data.js"

class MultipleElements extends Component {

	constructor(props){
		super(props);
		// cards, elements tha will be used in the tween
		this.cards = [];
		// the timeline instance
		this.tl = new TimelineLite({ paused: true });
		this.cardsTween;
	}

	componentDidMount(){
		this.tl.staggerTo( this.cards , 0.5, { autoAlpha: 1, y: -20 }, 0.1);
	}

	render(){
		this.tl.kill().clear().pause(0);
		return <div className="container">
			<div className="row mt-3">
				
				<div className="col-12">
					<h3 className="text-center">Multiple Elements Animation</h3>
					<p>This sample uses an array of data to create a group of cards. For each card we add a instance to a single timeline, which can be controlled with the buttons present below.</p>
					<p>In this sample we use the ref inline callback to create a <i>from</i> instance in the timeline and the index value from the map array helper, to create the stagger effect.</p>
					<hr/>
					{/* buttons */}
					<h3 className="text-center">Control Timeline</h3>
					<p>Use the buttons to control the cards Timeline</p>
					<div className="mb-2 btn-group">
						<button
							className="btn gsap-btn"
							onClick={() =>  this.tl.play()}
						>Play</button>
						<button
							className="btn gsap-btn"
							onClick={() => this.tl.pause()}
						>Pause</button>
						<button
							className="btn gsap-btn"
							onClick={() => this.tl.reverse()}
						>Reverse</button>
						<button
							className="btn gsap-btn"
							onClick={() => this.tl.restart()}
						>Restart</button>
					</div>
					<hr/>
				</div>
				
        {// map through the elements
        dataArray.map((element, index) => (
          <div
            key={element.id}
            className="col-12 col-sm-6 col-md-4 card-element"
            ref={div => this.cards[index] = div}
          >
            <div className="card mt-3">
              <div className="card-body">
                <div className="media">
                  <img
                    className="mr-3"
                    src="https://via.placeholder.com/64"
                    alt="Generic placeholder image"
                  />
                  <div className="media-body">
                    <h5 className="mt-0">{element.name}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

			</div>
		</div>;
	}
}

export default MultipleElements;
