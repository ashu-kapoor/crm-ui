import classes from "./Login.module.css";
import LoginForm from "../../components/ui/LoginForm/LoginForm";

const Home = () => {
  return (
    <div className={classes["home-wrapper"]}>
      <div className={classes["home-left"]}>
        <div className={classes["home-main"]}>
          <img alt="login" className={classes["Login-logo"]} />
          <LoginForm />
        </div>
        <footer className={classes["home-footer"]}>
          © 2021 ashutoshkapoor.com, inc. All rights reserved.{" "}
        </footer>
      </div>
      <div className={classes["home-right"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        vestibulum, nisl eu interdum faucibus, arcu turpis tincidunt libero,
        quis tempor lectus nibh in justo. Sed finibus scelerisque elit at
        interdum. Sed malesuada vestibulum tristique. Mauris tincidunt enim
        magna, nec dictum orci venenatis in. Maecenas eu maximus dui. Donec
        varius sed velit id convallis. Aliquam erat volutpat. Nunc commodo,
        risus eget egestas volutpat, magna nunc ultrices elit, sit amet
        hendrerit justo nunc ac felis. Vivamus vitae cursus leo. Phasellus
        placerat augue at ante malesuada ultrices. Aliquam vel lectus vitae erat
        commodo tincidunt. Etiam consectetur mollis justo nec dictum. Morbi
        metus est, fringilla nec ornare et, congue non nisl. Phasellus
        sollicitudin molestie sem, nec faucibus metus molestie eu. Etiam ac
        velit metus. Etiam malesuada euismod velit, non suscipit odio dictum id.
        Integer consequat ligula ipsum, in ornare libero tempor sed. Maecenas et
        leo at ex dapibus ullamcorper at non tellus. Pellentesque cursus
        ultrices purus, sit amet aliquam justo vehicula in. Vivamus eu est sed
        sem imperdiet congue. Suspendisse at ex tortor. Sed vel auctor augue,
        porttitor aliquam metus. Pellentesque interdum et nunc id ultrices.
        Donec quis dui est. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Integer imperdiet libero in mauris facilisis, vitae pulvinar neque
        fermentum. Aenean congue dolor neque, et tristique quam maximus sit
        amet. Cras pulvinar erat quis malesuada sagittis. Suspendisse non
        hendrerit lectus. Mauris maximus est massa, a mattis libero interdum ut.
        Nam pharetra pharetra diam, ac scelerisque velit maximus eget. Donec
        volutpat sed velit et tempor. Phasellus ac commodo lorem. Maecenas
        vestibulum enim eu sapien faucibus sagittis. Fusce euismod, dui quis
        iaculis pellentesque, mi felis tincidunt nulla, sed sodales erat libero
        vitae erat. Aliquam erat volutpat. Nunc in ipsum id mi finibus pharetra
        non vitae lectus. Fusce id est consectetur, eleifend odio sit amet,
        faucibus quam. Morbi ornare viverra facilisis. Nam vel mauris tristique,
        tempor neque sit amet, dignissim metus. Integer massa mi, fringilla et
        erat ac, vulputate tempor dolor. Sed auctor vehicula orci a pulvinar.
        Donec imperdiet, odio in bibendum iaculis, purus eros aliquam odio, vel
        fermentum lorem erat sed purus. Curabitur in aliquam ex, vitae laoreet
        felis. Vestibulum eu feugiat turpis. Vivamus eu efficitur tellus, in
        euismod lectus. Sed ac enim cursus, accumsan velit eu, faucibus ipsum.
        Donec a sem vitae sapien scelerisque ultrices. Mauris risus justo,
        scelerisque ac justo varius, varius commodo massa. Donec quis nunc
        accumsan, vehicula velit non, imperdiet nisl. Phasellus auctor consequat
        sollicitudin. Morbi volutpat erat quam, vitae vulputate risus mollis
        pharetra. Aliquam pretium ex sit amet magna rhoncus, eu finibus felis
        mattis. Phasellus sed libero sed sapien auctor scelerisque. Pellentesque
        auctor vestibulum sem.
      </div>
    </div>
  );
};

export default Home;
