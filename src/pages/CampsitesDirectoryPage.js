import {Container, Row, Col, Button} from "reactstrap";
import CampsitesList   from "../features/campsites/CampsitesList";
import { selectRandomCampsite } from "../features/campsites/campsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";

const CampsitesDirectoryPage =()=>{
    var selectedCampsite = selectRandomCampsite();
     const toggleCampsite = ()=>{
         selectedCampsite= selectRandomCampsite();
         console.log(selectedCampsite);
     }

    return(
        <Container>
            <Button  onClick={()=>toggleCampsite()}>
                Select Random Campsite
            </Button>
            <Row>
                <Col sm="5" md="7">
                    <CampsitesList/>

                </Col>
                <Col sm="7" md="5">
                    <CampsiteDetail campsite={selectedCampsite}/>
                 
                </Col>
                  
            </Row>

        </Container>

    )
}

export default CampsitesDirectoryPage;