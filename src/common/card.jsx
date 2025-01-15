import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardContent from './cardContent';
const Card = () => {
  return (
    <>
    <div classNameName="container">
    <div classNameName="row gx-5">
      <div classNameName="col-md-3 "><div classNameName='bg-danger'>1</div></div>
      <div classNameName="col-md-3 "><div classNameName='bg-success'>2</div></div>
      <div classNameName="col-md-3 "><div classNameName='bg-primary'>3</div></div>
      <div classNameName="col-md-3 "><div classNameName='bg-info'>4</div></div>
    </div>
  </div>
  
    <div className="container  text-center">
      <div className="row gx-5">
        <div className="col">
         <div className="bg-danger ">Custom column padding</div>
        </div>
        <div className="col">
          <div className="bg-success ">Custom column padding</div>
        </div>
        <div className="col">
         <div className=" bg-primary">Custom column padding</div>
        </div>
        <div className="col">
          <div className=" bg-info">Custom column padding</div>
        </div>
      </div>
    </div>
    <CardContent  cardContent={<Card1/>}> </CardContent>
    </>
  )
}

export default Card



function Card1() {
  return (
    <Container>
      <Row>
        <Col xs={{ order: 'first' }}>First, but last</Col>
        <Col xs>Second, but unordered</Col>
        <Col xs={{ order: 'last' }}>Third, but first</Col>
      </Row>
    </Container>
  );
}

