import axios from "axios";
import React, {Component} from "react";
import QuillWrapper from "./QuillWrapper";
import AceWrapper from "./AceWrapper";

import "./TextEditor.css";

class TextEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    const {data} = this.props;
    this.setState({data});   
  }

  changeField(field, e) {
    const {data} = this.state;
    data[field] = e.target.value;
    this.setState({data});
  }

  handleEditor(field, t) {
    const {data} = this.state;
    data[field] = t;
    this.setState({data});    
  }

  /*
  saveContent() {
    const {data} = this.state;
    if (this.props.reportSave) this.props.reportSave(data);
    const toast = Toaster.create({className: "saveToast", position: Position.TOP_CENTER});
    axios.post("/api/builder/islands/save", data).then(resp => {
      if (resp.status === 200) {
        toast.show({message: "Saved!", intent: Intent.SUCCESS});
      } 
      else {
        toast.show({message: "Error!", intent: Intent.DANGER});
      }
    });
  }
  */
  

  render() {

    const {data} = this.state;

    if (!data) return null;

    return (
      <div id="text-editor">
        <QuillWrapper value={data} onChange={data => this.setState({data})} />
      </div>
    );
  }
}

export default TextEditor;
