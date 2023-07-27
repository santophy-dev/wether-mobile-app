import {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {deviceWidth} from './Dimensions';
import {API_KEY} from './Constants';

export default function Home(props) {
  const [data, setData] = useState();
  const [details, setDetails] = useState();
  const [foreCast, setForeCast] = useState();

  console.log(foreCast?.list[1], 'here is the data of indore');

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${'Indore'}&appid=${API_KEY}`,
    )
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err));
  }, []);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${'Indore'}&appid=${API_KEY}`,
    )
      .then(res => res.json())
      .then(res => setForeCast(res))
      .catch(err => console.log(err));
  }, []);
  const Data = ({title, value}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white', fontSize: 16,padding:2}}>{title}</Text>
      <Text style={{color: 'white', fontSize: 16,padding:2}}>{value}</Text>
    </View>
  );

  return (
    <View
      style={{
        backgroundColor: '#6F7378',
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 30,
      }}>
      <View
        style={{
          position: 'absolute',
          paddingVertical: 20,
          paddingHorizontal: 10,
          left: 120,
        }}>
        <View
          style={{
            marginTop: 50,
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require('../assets/images/cloud.png')}
              style={{height: 100, width: 100, tintColor: 'white'}}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 40}}>
              {data?.name || 'Loading...'}
            </Text>
            <Text style={{color: 'white', fontSize: 64}}>
              {data
                ? `${(data['main']['temp'] - 273).toFixed(0)}° C`
                : 'Loading...'}
            </Text>
            <Text style={{fontSize: 22, color: 'white', textAlign: 'center'}}>
              {data ? data['weather'][0]['main'] : 'Loading...'}
            </Text>
          </View>
        </View>
      </View>

      <View style={{marginTop: 210}}>
        <View>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              marginTop: 100,
              marginBottom: 20,
              textAlign: 'center',
            }}>
            7 Days Forecast
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#000',
            padding: 10,
            borderRadius: 20,
          }}>
          <View>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              Sunday
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              Monday
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              Tuesday
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              Wednesday
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              Thursday
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              Friday
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              Satarday
            </Text>
          </View>
          <View>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {foreCast?.list?.[0]['main']['humidity']} %
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {foreCast?.list?.[1]['main']['humidity']} %
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {foreCast?.list?.[2]['main']['humidity']} %
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {foreCast?.list?.[3]['main']['humidity']} %
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {foreCast?.list?.[4]['main']['humidity']} %
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {foreCast?.list?.[5]['main']['humidity']} %
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {foreCast?.list?.[6]['main']['humidity']} %
            </Text>
          </View>
          <View>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {foreCast?.list[0].weather[0]['main']}
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {foreCast?.list[1].weather[0]['main']}
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {foreCast?.list[2].weather[0]['main']}
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {foreCast?.list[3].weather[0]['main']}
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {foreCast?.list[4].weather[0]['main']}
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {foreCast?.list[5].weather[0]['main']}
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {foreCast?.list[6].weather[0]['main']}
            </Text>
          </View>
          <View>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {(foreCast?.list?.[0]['main']['temp_min'] - 273).toFixed(0)} ° C
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {(foreCast?.list?.[1]['main']['temp_min'] - 273).toFixed(0)} ° C{' '}
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {(foreCast?.list?.[2]['main']['temp_min'] - 273).toFixed(0)} ° C{' '}
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {(foreCast?.list?.[3]['main']['temp_min'] - 273).toFixed(0)} ° C{' '}
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {(foreCast?.list?.[4]['main']['temp_min'] - 273).toFixed(0)} ° C{' '}
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {(foreCast?.list?.[5]['main']['temp_min'] - 273).toFixed(0)} ° C{' '}
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {(foreCast?.list?.[6]['main']['temp_min'] - 273).toFixed(0)} ° C{' '}
            </Text>
          </View>
          <View>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {(foreCast?.list?.[0]['main']['temp'] - 273).toFixed(0)} ° C
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {(foreCast?.list?.[1]['main']['temp'] - 273).toFixed(0)} ° C{' '}
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {(foreCast?.list?.[2]['main']['temp'] - 273).toFixed(0)} ° C{' '}
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {(foreCast?.list?.[3]['main']['temp'] - 273).toFixed(0)} ° C{' '}
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {(foreCast?.list?.[4]['main']['temp'] - 273).toFixed(0)} ° C{' '}
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {(foreCast?.list?.[5]['main']['temp'] - 273).toFixed(0)} ° C{' '}
            </Text>
            <Text style={{paddingVertical: 8, fontSize: 16, color: 'white'}}>
              {(foreCast?.list?.[6]['main']['temp'] - 273).toFixed(0)} ° C{' '}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 680,
          position: 'absolute',
          left: 10,
          backgroundColor: '#000',
          padding: 15,
          borderRadius: 20,
          paddingBottom: 20,
        }}>
        <Text style={{color: 'white', fontSize: 22, marginBottom: 16}}>
          Weather Details
        </Text>
        <View style={{width: deviceWidth - 50}}>
          <Data
            value={data ? data['wind']['speed'] : 'Loading..'}
            title="Wind"
          />
          <Data
            value={data ? data['main']['pressure'] : 'Loading..'}
            title="Pressure"
          />
          <Data
            value={`${data ? data['main']['humidity'] : 'Loading..'}%`}
            title="Humidity"
          />
          <Data
            value={data ? data['visibility'] : 'Loading..'}
            title="Visibility"
          />
        </View>
      </View>
    </View>
  );
}
