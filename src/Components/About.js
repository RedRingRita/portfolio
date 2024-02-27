import Image from 'react-bootstrap/Image';
import soleil from '../../src/Assets/Images/istockphoto-1368722560-612x612.jpg';

function About() {

    return (
        <div>
            <Image src={soleil} alt='Prunelle sous le soleil' roundedCircle />
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero atque officiis velit natus incidunt, amet repellat tempora obcaecati dolores quisquam consequuntur placeat numquam aliquam culpa in! At officia nesciunt perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorem enim, facilis non dolorum fugit asperiores officia odit amet dolor ipsa corrupti repellat reprehenderit, ullam rerum adipisci itaque vel labore?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam nihil voluptas non voluptatibus deleniti beatae unde repellat commodi sapiente reprehenderit aspernatur optio aperiam repellendus, dolorem temporibus consectetur sequi animi cupiditate.</h1>
        </div>
    );
}

export default About;