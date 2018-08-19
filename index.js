import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  ActivityIndicator,
  Dimensions,
  Platform,
  View,
  TouchableOpacity
} from 'react-native'

const { width, height } = Dimensions.get('window')

const screenWidth = width < height ? width : height

class FetchingIndicator extends Component {
  render () {
    if (!this.props.isFetching) {
      return null
    }
    return (
      <TouchableOpacity onPress={() => {}} activeOpacity={0.8} style={{
        position: 'absolute',
        width: screenWidth,
        height: '100%',
        left: 0,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.40)'
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
      </TouchableOpacity>
    )
  }
}

FetchingIndicator.propTypes = {
  isFetching: PropTypes.bool,
  cancelable: PropTypes.bool
}

FetchingIndicator.defaultProps = {
  isFetching: false,
  cancelable: false
}

export default FetchingIndicator
