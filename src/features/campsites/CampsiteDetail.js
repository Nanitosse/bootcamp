//import { Card, CardBody } from "reactstrap"

import  {Card,CardImg,CardText,CardBody,Col} from 'reactstrap'

const Campsitedetail = ({campsite})=>{
    const {image,name,description}=campsite;

    return(
        <col md='12' className='m-4'>
            <Card>
                <CardImg top src={image} alt ={name} />
                <CardBody>
                    <CardText>
                        {description}
                    </CardText>

                </CardBody>

                
            </Card>
        </col>
    )

}

export default Campsitedetail;