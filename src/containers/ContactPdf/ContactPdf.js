import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 20,
    flexGrow: 1
  }
});

// Create Document Component
export const MyDocument = ({ members, message }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Dear {members[0].title}, {members[0].lastName}</Text>
      </View>
      <View style={styles.section}>
        <Text>My name is {message.name}</Text>
        <Text>{message.body}</Text>
        <Text>Sincerely, {message.signature}</Text>
      </View>
    </Page>
  </Document>
);

export const ContactPdf = ({members, message}) => {
  debugger;
  if(members.length) {
  return(
    <div>
      <MyDocument members={members} message={message}/>
    </div>
  )
  } else {
    return
  }
}

export const mapStateToProps = state => ({
  members: state.searchResults,
  message: state.messages
})

export default connect(mapStateToProps)(ContactPdf)