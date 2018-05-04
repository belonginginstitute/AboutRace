const React = require('react')
const range = require('range')
const ReactFlex = require('react-flex')
require('react-flex/index.css')
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import kebabCase from 'lodash/kebabCase'

import styled, { css } from 'styled-components';

class Card extends React.Component {
    render() {
        return (
        <div className={this.props.className}>
            <h4>{this.props.type}</h4>
            {this.props.children}
            <Link to={`/${this.props.slug}s/${kebabCase(this.props.title)}`}>{this.props.title}</Link>
        </div>
        )
    }
}

const BASE_CARD_WIDTH = 350;
const FLEX = 100;
const MAX_WIDTH_CONSTANT = 1.2;
const ARTICLE_MULTIPLIER = 1.5;
const QUICK_FACT_MULTIPLIER = 1.5;

const StyledCard = styled(Card)`
  display: inline-block;
  height: 520px;
  flex: ${FLEX} ${FLEX} ${BASE_CARD_WIDTH}px;
  padding: 15px;
  border: solid thin lightgrey;
  background-color: white;
  -webkit-box-shadow: 0px 2px 15px 0px rgba(179,179,179,0.38);
  -moz-box-shadow: 0px 2px 15px 0px rgba(179,179,179,0.38);
  box-shadow: 0px 2px 15px 0px rgba(179,179,179,0.38);
  margin-bottom: 20px;
  font-family: "ff-tisa-web-pro";
  vertical-align: top;
  margin-left: 10px;
  margin-right: 10px;

  ${props => props.type == `Article` && css`
    flex: ${FLEX * ARTICLE_MULTIPLIER} ${FLEX * ARTICLE_MULTIPLIER} ${BASE_CARD_WIDTH * ARTICLE_MULTIPLIER}px;
  `}

  ${props => props.type == `QuickFact` && css`
    flex: ${FLEX * QUICK_FACT_MULTIPLIER} ${FLEX * QUICK_FACT_MULTIPLIER} ${BASE_CARD_WIDTH * QUICK_FACT_MULTIPLIER}px;
  `}
`;

export default StyledCard;

