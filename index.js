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
      <TouchableOpacity onPress={() => {}} activeOpacity={0.8} style={{
        position: 'absolute',
        width: screenWidth,
        height: screenHeight,
        left: 0,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.50)'
      }}>
        <View style={{
          width: screenWidth * 0.16,
          height: screenWidth * 0.16,
          borderRadius: screenWidth * 0.16 / 2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white'
        }}>
          <ActivityIndicator size={Platform.OS === 'ios' ? 'small' : screenWidth * 0.09} /* color='blue' */ style={{alignSelf: 'center'}} />
        </View>
        {this.props.message !== '' && this.props.message != null && <Text style={{fontSize: 20, color: 'white', textAlign: 'center', marginTop: 5}}>
          {this.props.message}
        </Text>}
      </TouchableOpacity>
    )
  }
}

FetchingIndicator.propTypes = {
  isFetching: PropTypes.bool,
  cancelable: PropTypes.bool,
  message: PropTypes.string
}

FetchingIndicator.defaultProps = {
  isFetching: false,
  cancelable: false,
  message: null
}

export default FetchingIndicator
