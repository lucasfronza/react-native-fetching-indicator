import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  ActivityIndicator,
  Dimensions,
  Platform,
  View,
  TouchableOpacity,
  Text
} from 'react-native'

const { width, height } = Dimensions.get('window')

const screenWidth = width < height ? width : height
const screenHeight = width < height ? height : width

class FetchingIndicator extends Component {
  render () {
    if (!this.props.isFetching) {
      return null
    }
    return (
      <TouchableOpacity onPress={this.props.onBackdropPress} activeOpacity={this.props.backdropActiveOpacity} style={{
        position: 'absolute',
        width: screenWidth,
        height: screenHeight,
        left: 0,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: this.props.backdropColor
      }}>
        <View style={{
          width: screenWidth * 0.16,
          height: screenWidth * 0.16,
          borderRadius: screenWidth * 0.16 / 2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white'
        }}>
          <ActivityIndicator size={Platform.OS === 'ios' ? 'small' : screenWidth * 0.09} color={this.props.color} style={{alignSelf: 'center'}} />
        </View>
        {this.props.message !== '' && this.props.message != null && <Text style={[{fontSize: 20, color: 'white', textAlign: 'center', marginTop: 5}, this.props.messageStyle]}>
          {this.props.message}
        </Text>}
      </TouchableOpacity>
    )
  }
}

FetchingIndicator.propTypes = {
  isFetching: PropTypes.bool,
  cancelable: PropTypes.bool,
  color: PropTypes.string,
  message: PropTypes.string,
  messageStyle: Text.propTypes.style,
  backdropColor: PropTypes.string,
  backdropActiveOpacity: PropTypes.number,
  onBackdropPress: PropTypes.func
}

FetchingIndicator.defaultProps = {
  isFetching: false,
  cancelable: false,
  color: undefined,
  message: null,
  messageStyle: {},
  backdropColor: 'rgba(0, 0, 0, 0.50)',
  backdropActiveOpacity: 0.8,
  onBackdropPress: () => null
}

export default FetchingIndicator
