import React from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/base';
import InputSearch from '@/components/form-component/InputSearch';

const MessageHeader = () => {
    return (
          <View style={{paddingTop: 20, paddingBottom: 10}}>
            <View style={{flexDirection: 'row', paddingHorizontal: 10,  justifyContent: 'center', paddingBottom: 10}}>
              <View >
                <Text style={{color: "#fff", fontWeight: 600, fontSize: 16}}>Tin nhắn </Text>
              </View>
            </View>



          </View>
    );
};

export default MessageHeader;