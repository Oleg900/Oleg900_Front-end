import React from "react";
import Title from "./Components/Title";
import Button from "./Components/Button";
import User from "./Components/User";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      backlog: "",
      ready: "",
      progress: "",
      finished: ""
    }

    this.change = this.change.bind(this);

  }

  change(elem, nameState) {
    if (elem != null && elem != "") {
      let name = "";
      if (localStorage.getItem(elem)) {
          name = localStorage.getItem(elem);
      } else name = elem;

      let sum = 0;
      for (let i = 1; i <= localStorage.length; i++) {
          if (localStorage.getItem(i + " " + nameState)) sum = i;
      }
      sum++;

      localStorage.removeItem(elem);  
      localStorage.setItem (sum + " " + nameState, name);
    }

    let backlog =[],
    ready =[],
    progress =[],
    finished =[];

    for (let i = 1; i <= localStorage.length; i++) {
        if (localStorage.getItem(i + " backlog")) {
          backlog.push(<div className="task-name">{localStorage.getItem(i + " backlog")}</div>);
        }
        if (localStorage.getItem(i + " ready")) {
          ready.push(<div className="task-name">{localStorage.getItem(i + " ready")}</div>);
        }
        if (localStorage.getItem(i + " progress")) {
          progress.push(<div className="task-name">{localStorage.getItem(i + " progress")}</div>);
        }
        if (localStorage.getItem(i + " finished")) {
          finished.push(<div className="task-name">{localStorage.getItem(i + " finished")}</div>);
        }
    }

    this.setState({backlog: backlog});
    this.setState({ready: ready});
    this.setState({progress: progress});
    this.setState({finished: finished});
  }

  componentDidMount() {
    this.change();
  }

  render() {
    
    // localStorage.clear();
    return (
      <>
        <header>
         <h1>Awesome Kanban Board</h1>
         <User/>
        </header>
        <main className="task">
          <div className="task-column">
            <Title title="Backlog"/>
            <>{this.state.backlog}</>
            <Button name="backlog" cn={this.change}/>
          </div>
          <div className="task-column">
            <Title title="Ready"/>
            <>{this.state.ready}</>
            <Button name="ready" select="backlog" cn={this.change}/>
          </div>
          <div className="task-column">
            <Title title="In progress"/>
            <>{this.state.progress}</>
            <Button name="progress" select="ready" cn={this.change}/>
          </div>
          <div className="task-column">
            <Title title="Finished"/>
            <>{this.state.finished}</>
            <Button name="finished" select="progress" cn={this.change}/>
          </div>
        </main>
        <footer>
          <div className="footer_left">
            <div className="footer-tasks">
              Active tasks: {this.state.backlog.length}
            </div>
            <div className="footer-tasks">
              Finished tasks: {this.state.finished.length}
            </div>
          </div>          
        </footer>        
      </>
    )
  }  
  
}

export default App;
