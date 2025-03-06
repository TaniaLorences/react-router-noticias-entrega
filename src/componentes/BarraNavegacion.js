import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function BarraNavegacion() {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="/">App de noticias</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default BarraNavegacion;