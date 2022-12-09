import '../index.css';
import {View, TextInput, StyleSheet} from 'react-native'
import React, {useState} from 'react';

const Search = () => {

    const [searchInput, setSearchInput] = useState("");

    const stories = [
        {name: 'Keep a Eye on this One Stock', author: 'author', date: '12/07/22'},
    ]
    
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    
    if (searchInput.length > 0) {
        stories.filter((story) => {
            return story.name.match(searchInput);
        });
    }

    return (
        <>
            <div className='container'>
                <div className='container-info'>
                    <h1 className='s-title'>Search</h1>
                </div>
                <div className="search-container">
                    <View>
                        <TextInput placeholder="Search..." style={styles.input} onChange={handleChange} value={searchInput}/>
                        <table>
                            <tr>
                                <th>Story</th>
                            </tr>

                            {stories.map((story, stories) => {
                                <tr>
                                    <td>{stories.name}</td>
                                </tr>
                            })}
                        </table>
                    </View>
                </div>
                <div className='S-BG'></div>
            </div>
        </>
    );
}
 
export default Search;

const styles = StyleSheet.create({
    input: {
      borderColor: "black",
      width: "80vw",
      borderWidth: 2,
      borderRadius: 20,
      padding: 1,
      textAlign: 'center',
      fontFamily: 'bungee,sans-serif',
      fontSize: 15,
    },
});