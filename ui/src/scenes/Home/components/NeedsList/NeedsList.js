import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';

const ListDiv = styled.div`
  .list-heading {
    color: green;
  }
  .list-area {
    border: 1px solid red;
  }
`;

const List = styled(ListGroup)`
  color: red;
`;

const RealitiesListHeader = styled.p`
      font-size: 1.5em;
      padding: .5em 0 .5em 0;
      color: #fff;
      text-align:center;
      background-color: #00cf19;
`;
const RealitiesListGroupItem = styled(ListGroupItem)`
    background-color: ${props => (props.selected ? '#00cf19' : '#fff')};
`;

const renderListItems = (needs, onSelectNeed, selectedNeed) => {
  if (needs) {
    return needs.map((need, i) => {
      const selected = need === selectedNeed;
      return (
/*
  .active {
    background-color: #00cf19;
    color: #fff;
    }
`
const NeedsList = ({ needs, onSelectNeed, selectedNeed }) => (
  <div>
    <RealitiesListHeader>Needs</RealitiesListHeader>
    <ListGroup>
      {needs && needs.map((need, i) => (
        // eslint-disable-next-line react/no-array-index-key
*/
        <RealitiesListGroupItem
              // eslint-disable-next-line react/no-array-index-key
          key={i}
          selected={selected}
          onClick={() => onSelectNeed(need)}
        >
          {need.title}
        </RealitiesListGroupItem>
      );
    });
  }
  return null;
};

const NeedsList = ({ needs, onSelectNeed, selectedNeed }) => (
  <div>
    <RealitiesListHeader>Needs</RealitiesListHeader>
    <ListGroup>
      {renderListItems(needs, onSelectNeed, selectedNeed)}
    </ListGroup>
  </div>
);

NeedsList.defaultProps = {
  needs: [],
};

NeedsList.propTypes = {
  needs: PropTypes.array,
  onSelectNeed: PropTypes.func.isRequired,
  selectedNeed: PropTypes.object,
};

export default NeedsList;
