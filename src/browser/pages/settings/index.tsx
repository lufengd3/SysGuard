import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import * as style from './style.less';

export default class TextFieldPlaceholderExample extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={style.container}>
        <TextField placeholder="I am a placeholder." ariaLabel="Please enter text here" />
        <TextField disabled={true} placeholder="I am disabled. " />
        <TextField required={true} placeholder="I am required." />
        <TextField errorMessage="Error message" placeholder="I have an error message." />
      </div>
    );
  }
}