import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import SearchInput from './search-input';
import {randomColor} from '../shared/utility.js';

// Importing actions
import {getPlanets} from "../redux/actions/planetAction";


class PlanetComponent extends React.Component {

    componentDidMount(){
        this.props.getPlanets()
    }

    serach = (text) => {
        this.props.getPlanets(text)
    }

    render() {
        return (
          <div className="planets-component">
            <SearchInput search={this.serach}></SearchInput>
            <div className="planets-container">
               {this.props.planets.map(function (planet, index) {
                  return (
                    <div
                      style={{
                        width: planet.height === 'unknown' ? 100 : planet.height,
                        background:randomColor()
                      }}
                      className="planets"
                      title={ 'Planet Name: ' + planet.name}
                      key={index}
                    >
                      <span class="planet-name">
                        { planet.name }
                      </span>
                      <span class="planet-population">
                      </span>
                    </div>
                  ) })}
            </div>
          </div>
        );
    }
}
const mapStateToProps = (state) => ({
    planets: state.planets.planets,
})

const mapDispatchToProps = dispatch => {
    return {
        getPlanets: (text) => dispatch(getPlanets(text))
    }
}

PlanetComponent.propTypes = {
    getPlanets: PropTypes.func
};
export default connect(mapStateToProps, mapDispatchToProps)(PlanetComponent)