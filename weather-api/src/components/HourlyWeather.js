import React, { Component } from "react";



class HourlyWeather extends Component {
    

    render() {
        
        return (
            <>
            <section className="hourlyWeather">
          <section>
            <time>{this.props.hourlyArray[0]}</time>
            <figure>
              <img src="https://placekitten.com/75/75" alt="cat"></img>
            </figure>
            <span className="hTempValue">{this.props.tempArray[0]}&#8451;</span>
          </section>
          <section>
            <time>{this.props.hourlyArray[1]}</time>
            <figure>
              <img src="https://placekitten.com/75/75" alt="cat"></img>
            </figure>
            <span className="hTempValue">{this.props.tempArray[1]}&#8451;</span>
          </section>
          <section>
            <time>{this.props.hourlyArray[2]}</time>
            <figure>
              <img src="https://placekitten.com/75/75" alt="cat"></img>
            </figure>
            <span className="hTempValue">{this.props.tempArray[2]}&#8451;</span>
          </section>
          <section>
            <time>{this.props.hourlyArray[3]}</time>
            <figure>
              <img src="https://placekitten.com/75/75" alt="cat"></img>
            </figure>
            <span className="hTempValue">{this.props.tempArray[3]}&#8451;</span>
          </section>
          <section>
            <time>{this.props.hourlyArray[4]}</time>
            <figure>
              <img src="https://placekitten.com/75/75" alt="cat"></img>
            </figure>
            <span className="hTempValue">{this.props.tempArray[4]}&#8451;</span>
          </section>
          <section>
            <time>{this.props.hourlyArray[5]}</time>
            <figure>
              <img src="https://placekitten.com/75/75" alt="cat"></img>
            </figure>
            <span className="hTempValue">{this.props.tempArray[5]}&#8451;</span>
          </section>
          <section>
            <time>{this.props.hourlyArray[6]}</time>
            <figure>
              <img src="https://placekitten.com/75/75" alt="cat"></img>
            </figure>
            <span className="hTempValue">{this.props.tempArray[6]}&#8451;</span>
          </section>
        </section>
            </>
        )
    }
}

export default HourlyWeather;