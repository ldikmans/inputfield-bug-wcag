import { IonInput } from "@ionic/react";
import "./ExploreContainer.css";

const ExploreContainer: React.FC = () => {
  return (
    <div className="container">
      <IonInput
        id="name"
        name="username"
        className="signup-form-input"
        labelPlacement="floating"
        fill="outline"
        type="text"
        clearInput
        label="username is the label that should not be truncated"
      ></IonInput>
    </div>
  );
};

export default ExploreContainer;
