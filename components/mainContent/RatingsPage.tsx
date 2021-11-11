import React from 'react';
import {
    SetState, Dispatch, 
    Ref, getRatingsGetIsMore, 
    messageStrToJSON, PageAction
} from '../Utilities';
import { Rating, FilterObj } from './MainPageUtilities';

import Icons from '../Icons';
import {Rate, DynamicRating} from '../Ratings';

import { RootNavPages, MainPageNavPages as HomePageNavPages } from '../../types';
import { useNavigation, useRoute, NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Dimensions, ScrollView, TextInput } from 'react-native';
import { Text, View } from '../../components/Themed';
import { GlobalStyle, Colors, rem, remText } from '../../AppStyles';
import { FrontPagesNav } from '../FrontPagesUtilities';
import { createStackNavigator } from '@react-navigation/stack';
import UserObject from '../UserObject';

const GetRatingFilterIcon = (str: string): JSX.Element => {
    let dic: {[key: string]: JSX.Element} = {
        desc: Icons.ArrowDownIcon,
        asc: Icons.ArrowUpIcon
    }
    return dic[str] ? dic[str] : <p className='ratingFilterIcon centerAll'>{str}</p>;
}

function RatingsFilterOption(
            {filterName, subFilterElements, filterObj: {filter, subFilter, setFilter, setSubFilter}}:
            {filterName: string, subFilterElements: string[], filterObj: FilterObj}
        ){

    const isSelected = filter==filterName;

    let [subFilterIndex, setSubFilterIndex]: [number, SetState<number>] = React.useState(
        isSelected ? subFilterElements.indexOf(subFilter) : 0
    );

    const nextIndex = (): void => {
        if (isSelected){
            let newIndex = (subFilterIndex + 1) % subFilterElements.length;
            setSubFilterIndex(newIndex);
            setSubFilter(subFilterElements[newIndex]);
        } else {
            setFilter(filterName);
            setSubFilter(subFilterElements[subFilterIndex]);
        }
    }

    return (
        <Text 
            style={[RatingsStyle.filterOption, isSelected ? RatingsStyle.filterOptionSelected : RatingsStyle.filterOptionNotSelected]} 
            onPress={nextIndex}
        >
            <Text className='filterName'>{filterName}</Text>
            <Text className='spacer'></Text>
            <Text className='subfilterOptionIcon'>
                {GetRatingFilterIcon(subFilterElements[subFilterIndex])}
            </Text>
        </Text>
    );
}

export function RatingsFilter({filterObj}: {filterObj: FilterObj}){

    return (
        <View id='ratingsFilter'>
            <RatingsFilterOption 
                filterName='name' 
                subFilterElements={['asc', 'desc']}
                filterObj={filterObj}
            />
            <RatingsFilterOption 
                filterName='popularity' 
                subFilterElements={['asc', 'desc']} 
                filterObj={filterObj}
            />
            <RatingsFilterOption 
                filterName='avg rating' 
                subFilterElements={['desc', 'asc']} 
                filterObj={filterObj}
            />
            <RatingsFilterOption 
                filterName='my rating' 
                subFilterElements={['desc', 'asc']} 
                filterObj={filterObj}
            />
            <RatingsFilterOption 
                filterName='partner rating' 
                subFilterElements={['desc', 'asc']} 
                filterObj={filterObj}
            />
            <RatingsFilterOption 
                filterName='gender' 
                subFilterElements={['male', 'female', 'unisex']} 
                filterObj={filterObj}
            />
        </View>
    );
}

const ResultsAtATime = 10;

function RatingsPage({pageDispatch}: {pageDispatch: Dispatch<PageAction>}){

    let searchRef: Ref<HTMLInputElement|null> = React.useRef(null);

    let [ratings, setRatings]: [Rate[], Dispatch<Rate[]> | any] = React.useState([] as Rate[]);
    let [isMore, setIsMore] = React.useState(false);

    let getRatingsSetIsMore =  async (filter: string, subFilter: string, range: number, rangeStart: number): Promise<Rate[]> => {
        let searchTerm = searchRef.current ? searchRef.current!.value : '';
        let {ratings, isMore}: {ratings: Rate[], isMore: boolean} = await getRatingsGetIsMore(
            filter, subFilter, range, rangeStart, searchTerm
        );

        setIsMore(isMore);
        return ratings;
    }

    let [search, setSearch] = React.useState("");
    let setRatingSetIsMore = (filter: string, subFilter: string, range: number, rangeStart: number): void => {
        setRatings([]);
        setIsMore(false);
        getRatingsSetIsMore(filter, subFilter, range, rangeStart).then(setRatings);
    }

    let [showSettings, setShowSettings]: [boolean, SetState<boolean>] = React.useState(false as boolean);
    let [filter, setFilter]: [string, SetState<string>] = React.useState('avg rating');
    let [subFilter, setSubFilter]: [string, SetState<string>] = React.useState('desc');

    React.useEffect(()=>{
        setRatingSetIsMore(filter, subFilter, ResultsAtATime, 0);
    }, [filter, subFilter, search]);

    React.useEffect(()=>{

        setRatingSetIsMore(filter, subFilter, ResultsAtATime, 0);
        
	    UserObject.addWebSocketCallback(async (event) => {

	    	let {type, dynamicRating} = messageStrToJSON(event.data);
            dynamicRating = new DynamicRating(dynamicRating);
            switch (type){
                case "rating":
                    let ratingsLength: number;
                    setRatings((prevState: Rate[]): Rate[] => {
                        ratingsLength = prevState.length;
                        return prevState;
                    });
                    setRatingSetIsMore(filter, subFilter, ratingsLength!, 0);

                    break;
                
                default:
                    throw new Error(`unknown websocket type: "${type}"`);
            }
        });

        return UserObject.removeWebSocketCallback;
    }, []);

    let filterObj = {filter, subFilter, setFilter, setSubFilter}; //todo: turn into useContext

    let showMoreButton = <button id='showMoreButton' type='button' onClick={
        async () => {
            let scrollPos = $('#mainContent').scrollTop();
             setRatings(ratings.concat(newRatings));
            $('#mainContent').scrollTop(scrollPos!);
        }
    }>show more</button>;

    return (
        <View style={[GlobalStyle.col, GlobalStyle.spacer]}>
            <View>
                <View style={RatingsStyle.filter}>
                    <Text 
                        style={[RatingsStyle.filterButton, (showSettings) ? RatingsStyle.filterButtonSelected : RatingsStyle.filterButtonSelected]} 
                        onPress={()=>setShowSettings(!showSettings)}
                    >
                        {Icons.FilterIcon}
                    </Text>
                    <View style={RatingsStyle.filterPill}>
                        <Text style={RatingsStyle.filterPillName}>{filter}</Text>
                        {GetRatingFilterIcon(subFilter)}
                    </View>
                    <View style={GlobalStyle.spacer}></View>
                    <TextInput onChangeText={setSearch}></TextInput>
                    {Icons.SearchIcon}
                </View>
            </View>
            <ScrollView style={RatingsStyle.ratingsTableContainer}>
                {showSettings ? 
                    <View>
                        <RatingsFilter filterObj={filterObj}/>
                    </View> : null
                }
                {(ratings.length == 0) ? Icons.LoadingIcon : 
                    ratings.map((nameObj)=>{
                        return <Rating key={JSON.stringify(nameObj)} pageDispatch={pageDispatch} nameObj={nameObj}/>
                    })
                }
                {isMore ? showMoreButton : ''}
            </ScrollView>
        </View>
    )
}

const RatingsStyle = StyleSheet.create({
    filterOption: {
        borderRadius: rem(0.5),
        ...GlobalStyle.row,
        ...GlobalStyle.centerCross
    },

    filterOptionSelected: {
        backgroundColor: Colors.indigo[400],
        color: "white",
        //stroke: "white"
    },

    filterOptionNotSelected: {

    },

    filter: {
        height: remText(3),
        backgroundColor: Colors.grey[200],
        position: "relative",
        zIndex: 2,
        ...GlobalStyle.row,
        ...GlobalStyle.centerCross
    },

    filterButton: {
        marginRight: rem(0.5),
        marginLeft: rem(0.5),
        height: rem(2.5),
        width: rem(2.5),
        borderRadius: rem(2.5)
    },

    filterButtonSelected: {
        backgroundColor: Colors.grey[500]
    },

    filterButtonNotSelected: {
        backgroundColor: 'transparent'
    },

    filterPill: {
        borderColor: Colors.grey[700],
        borderWidth: rem(0.5), //thin
        color: Colors.grey[700],
        margin: 0,
        paddingTop: rem(0.15),
        paddingRight: rem(0.1),
        paddingBottom: rem(0.15),
        paddingLeft: rem(0.5),
        borderRadius: rem(2),
        ...GlobalStyle.row,
        ...GlobalStyle.centerCross
    },

    filterPillName: {
        paddingRight: rem(0.3),
        //borderRight: rem(0.5),
        ...GlobalStyle.row,
        ...GlobalStyle.centerAll
    },

    ratingsTableContainer: {
        position: "relative",
        ...GlobalStyle.row,
        ...GlobalStyle.spacer
    },

    heading_h1_last_child: {
        marginRight: 0
    },

    heading_h1_span: {
        color: Colors.indigo[700]
    },

    bottomHalf: {
       backgroundColor: Colors.indigo[100]
    }
});


export default RatingsPage;