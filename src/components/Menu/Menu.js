import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/list';


export default class DrawerSimpleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>
        <IconButton
          tooltip="Список уроков"
          onClick={this.handleToggle}
          iconStyle={{
            width: 36,
            height: 36,
          }}
          style={{
            width: 72,
            height: 72,
            padding: 16,
          }}
        >
          <ActionHome
          />
        </IconButton>
        <Drawer open={this.state.open}>
          <MenuItem
            onClick={this.handleToggle}
            className='MenuItem'
            style={{
              fontSize: '1em',
              fontWeight: 600,
            }}
          >Урок 1</MenuItem>
        </Drawer>
      </div>
    );
  }
}
