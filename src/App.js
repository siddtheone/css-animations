import { OneTwo } from "./1.2";
import { OneThree } from "./1.3";
import { OneFour } from "./1.4";
import { Twelve } from "./12";
import { Thirteen } from "./13";
import { Fifteen } from "./15";
import { SwipeButton } from "./16";
import { Seventeen } from "./17";
import { TwoTen } from "./2.10";
import { TwoEleven } from "./2.11";
import { TwoSeven } from "./2.07";
import { TwoEight } from "./2.08";
import { TwoNine } from "./2.09";
import { ImageURL } from "./constants";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>CSS Animations</h1>

      <section>
        <h2>Buttons</h2>
        <fieldset>
          <legend>Creative button hover</legend>
          <Seventeen>Hover Me</Seventeen>
        </fieldset>
        <fieldset>
          <legend>Swipe button effect</legend>
          <SwipeButton>Hover Me</SwipeButton>
        </fieldset>
        <fieldset>
          <legend>Rotating button effect</legend>
          <Fifteen />
        </fieldset>
      </section>

      <section>
        <h2>3D transforms</h2>
        <fieldset>
          <legend>Rotate in 3d</legend>
          <Thirteen />
        </fieldset>
        <fieldset>
          <legend>Translate in 3d</legend>
          <Twelve />
        </fieldset>
      </section>

      <section>
        <h2>2D transform</h2>
        <fieldset>
          <legend>Transform origin</legend>
          <TwoEleven />
        </fieldset>
        <fieldset>
          <legend>Skew</legend>
          <TwoTen src={ImageURL} />
        </fieldset>
        <fieldset>
          <legend>Rotate</legend>
          <TwoNine src={ImageURL} />
        </fieldset>
        <fieldset>
          <legend>Scale</legend>
          <TwoEight />
        </fieldset>
        <fieldset>
          <legend>Translate</legend>
          <TwoSeven src={ImageURL} />
        </fieldset>
      </section>

      <section>
        <h2>CSS transitions basics</h2>
        <fieldset>
          <legend>Different ways to write the transition property</legend>
          <OneFour>css transition</OneFour>
        </fieldset>
        <fieldset>
          <legend>Transition timing function and delay</legend>
          <OneThree>css transition</OneThree>
        </fieldset>
        <fieldset>
          <legend>CSS transition</legend>
          <OneTwo>css transition</OneTwo>
        </fieldset>
      </section>
    </div>
  );
}
