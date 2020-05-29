class Session extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
    }
    render() {
      return (
        <div>
          <Feed
            myProp={this.state.email}
            myFunc={this.siblingAFunc}
          />
          <Profile
            myProp={this.state.email}
            myFunc={this.siblingBFunc}
          />
        </div>
      );
    }
    // Define 'siblingAFunc' and 'siblingBFunc' here
  }