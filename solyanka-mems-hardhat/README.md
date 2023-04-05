# Contract for NFT Collection

Данный репозиторий является одним из компонентов NFT memes dApp. Это смарт-контракт написанный на языке Solidity. Я использую hardhat для тестирования, деплоя, верификации, получения gas report и coverage. Gas report и coverage выглядят следующим образом:

1. `Gas report` ![image](https://user-images.githubusercontent.com/118951514/230160517-c7b596ed-4c54-47aa-adf8-4af898107587.png)
2. `Coverage` ![image](https://user-images.githubusercontent.com/118951514/230160296-71c0eecd-a0df-4397-bd8b-abaf1c6edcb6.png)

## Тестирование смарт-контракта

Тесты для данного смарт-контракты были написаны через фреймворк hardhat. Тесты были следующие:
1. `should allow buying Windows Moment NFT` - покупка NFT Windows Moment пройдет успешно и окажется на адрессе у покупателя. ✅
2. `should allow buying Regex Moment NFT` - покупка NFT Regex Moment пройдет успешно и окажется на адрессе у покупателя. ✅
3. `should allow buying Gaming Moment NFT` - покупка NFT Gaming Moment пройдет успешно и окажется на адрессе у покупателя. ✅
4. `should allow buying File Path Moment NFT` - покупка NFT File Path пройдет успешно и окажется на адрессе у покупателя. ✅
5. `should allow buying CPU Moment NFT` - покупка NFT CPU Moment пройдет успешно и окажется на адрессе у покупателя. ✅
6. `should not allow buying more than 10 NFTs of the same type` - покупка больше 10 NFT одного типа окажется не возможной. ✅
7. `should withdraw contract balance` - вывод средств с контракта пройдет успешно. ✅
8. `should return the correct token URI` - функция tokenURI() вернет верный tokenURI купленного NFT. ✅
9. `should revert if not called by owner` - если средства с контракта пытается вывести не создатель контракта, то ничего не выйдет. ✅
10. `should not allow non-owners to change the base URI` - не позволяет изменять baseURI всем, кто не является создателем контракта ✅
11. `should be changed by owner` - изменить значение baseURI может только создатель контракта. ✅

## Адрес контракта после деплоя

```
0x8eB00763110EE19B1e60F437AEe4cA9f400E7E87 https://testnet.bscscan.com/address/0x8eB00763110EE19B1e60F437AEe4cA9f400E7E87
```

## Ссылка на BscScan

```
0x8eB00763110EE19B1e60F437AEe4cA9f400E7E87 https://testnet.bscscan.com/address/0x8eB00763110EE19B1e60F437AEe4cA9f400E7E87
```

## Установка

1. Клонируйте репозиторий:

```
git clone https://github.com/SweetBubalehj/SOLYANKA-NFT.git
```

2. Установите зависимости

```
cd solyanka-mems-hardhat
npm install
```

3. Запустите проект:

```
npm run dev
```
