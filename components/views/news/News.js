import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Grid, Row, Col, Button, Text, Icon, Body, Left, Right } from 'native-base';
import axios from 'axios';

const VIEWPORT_WIDTH = Dimensions.get('window').width;
const VIEWPORT_HEIGHT = Dimensions.get('window').height;

const data = [
	{
		title: 'Beautiful and dramatic Antelope Canyon',
		subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
		image: 'https://i.imgur.com/UYiroysl.jpg',
		body:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam recusandae quos provident repellat, ratione quo, veritatis eaque deserunt maiores soluta, sequi, quia consequuntur? Aspernatur sequi nobis, consequuntur iure ad ab, numquam asperiores illum aut, repudiandae dolores obcaecati? Vero consequuntur repellendus quas sit pariatur, enim cupiditate quae, accusamus impedit maxime, possimus perferendis ab similique. Non eveniet, libero minima cum, quo accusamus. Aperiam, debitis repudiandae veniam, repellat beatae itaque quam quasi alias voluptatum aliquam fuga illum quia. Magnam unde numquam eos libero architecto, expedita commodi, deleniti fugit alias velit veritatis nobis! Expedita facere ipsum odio vitae dolorem possimus rem. Unde autem facere quos enim, nulla earum reiciendis doloremque recusandae. Praesentium minus blanditiis non consequatur quidem doloribus illum. Voluptatum voluptatem quis mollitia saepe earum dolor nihil quaerat, repellendus laboriosam nesciunt similique reprehenderit ex libero explicabo cum, corporis repudiandae, ipsa hic iusto incidunt quasi blanditiis sed. Impedit cum aspernatur ex, illum aperiam molestiae odio dolorum hic facilis minima omnis delectus iusto esse ipsum laborum alias! Ad perspiciatis temporibus, aliquam quas veritatis nesciunt ullam eius quae, doloribus, facilis unde ipsa dolor blanditiis repellat accusamus sequi nam nihil debitis nulla! Debitis eligendi iure expedita reprehenderit recusandae quam, rerum, aliquid ipsam, iste vitae natus rem a minima.',
		category: 'Breaking',
	},
	{
		title: 'Earlier this morning, NYC',
		subtitle: 'Lorem ipsum dolor sit amet',
		image: 'https://i.imgur.com/UPrs1EWl.jpg',
		body:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis consectetur quaerat odit, suscipit vel aliquam commodi minus perspiciatis, voluptatum fugiat reprehenderit. Totam, corporis, doloribus! Illo aut possimus autem eligendi totam dicta reiciendis, dolores. Fuga animi quisquam nostrum dolorem, quibusdam laudantium quis? Eaque illo reprehenderit sapiente praesentium suscipit, enim, quasi corporis velit veniam quas tenetur vel aliquam ipsam maxime ducimus culpa mollitia alias vero ex consequatur nostrum voluptas! Provident tempore vero adipisci deserunt quaerat magni atque porro, et laudantium impedit aut aspernatur voluptatum blanditiis dignissimos veritatis explicabo quas. Praesentium placeat, quidem dolore nobis, facilis corporis quae. Temporibus tenetur maxime consectetur placeat quae, enim est perferendis esse nobis maiores tempora magnam accusamus aspernatur excepturi, ullam exercitationem numquam quisquam cum. Temporibus veniam quia rerum inventore ullam praesentium quaerat, sequi, delectus sit, voluptatibus deleniti repellat dolores voluptatem minus. Veniam excepturi natus dolores non magnam! Ab est adipisci numquam nihil temporibus consequuntur ut suscipit ducimus, optio cumque earum repellendus placeat, accusantium nesciunt sequi sint doloribus quod quis. Sequi consequuntur aliquid repellat dignissimos nulla possimus nesciunt voluptatum explicabo eos, deleniti itaque doloremque, a delectus facere adipisci architecto, omnis optio, pariatur ex aspernatur. Aut dolores nulla quo hic eaque optio eum reprehenderit ullam sed delectus, eveniet consectetur!',
		category: 'Breaking',
	},
	{
		title: 'White Pocket Sunset',
		subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
		image: 'https://i.imgur.com/MABUbpDl.jpg',
		body:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus explicabo at soluta eos voluptate praesentium nihil nemo excepturi, cupiditate delectus mollitia nulla iure dicta, dignissimos sapiente fugit possimus, maxime qui minus vitae rem, veniam voluptatibus repellendus? A ut nam est in accusantium sed voluptatem cumque doloremque modi optio voluptates reprehenderit id consequuntur iste quod odio officiis dicta distinctio fuga inventore, asperiores quasi voluptate quo officia? Voluptatibus qui placeat, atque nesciunt rerum, deserunt nobis in dolore culpa. Voluptate harum adipisci enim, fugiat doloremque nisi modi, nobis veniam reiciendis eos distinctio? Soluta sed, nulla. Dolorum ipsa rem sint eligendi ab! Autem numquam, magni laborum beatae quis enim vero, suscipit distinctio natus officiis excepturi aliquid dolor id. Magnam consectetur sunt saepe architecto quae eum voluptatum repudiandae tenetur temporibus ratione illo in ullam dolore repellendus, nam consequatur at deserunt ab corporis excepturi dicta quidem ad, voluptas asperiores tempore! Sed exercitationem iusto odio voluptatem mollitia deserunt ipsam cupiditate, atque dolore illum! Ea accusamus fuga aliquam, nulla dolores, consectetur dolore quod molestias cum delectus sapiente eos laborum? Nisi labore nobis deleniti dicta fugiat earum, dolorum id, ducimus magni consequuntur obcaecati assumenda distinctio odit ea nesciunt, voluptate in quam voluptatem dignissimos. Assumenda ducimus, nulla sapiente. Aperiam, sequi?',
		category: 'Breaking',
	},
	{
		title: 'Acrocorinth, Greece',
		subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
		image: 'https://i.imgur.com/KZsmUi2l.jpg',
		body:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla cupiditate enim dolorum eius unde quo dignissimos aliquid, autem asperiores maxime eum consectetur, at ipsum soluta quis ullam. Ullam nobis, consequatur aspernatur quo totam iste accusamus vel quos, veritatis sed possimus, aliquid quidem. Iusto et reiciendis ad aliquam esse nesciunt similique nemo, dicta velit, vitae fugit, adipisci molestias, beatae ipsam natus voluptas perferendis commodi voluptatem atque optio voluptatum sunt. Facilis, quae, dolorem. Adipisci sunt consectetur, amet voluptate debitis sint cum voluptatibus voluptatum recusandae modi earum beatae ipsa magni eligendi hic quae nulla! Incidunt ducimus quia, velit libero. Velit totam a ducimus quaerat error, quia omnis reiciendis perferendis quibusdam magni ipsum pariatur minima, eius molestiae vero neque perspiciatis ipsam culpa dignissimos impedit incidunt illum id. Eos soluta explicabo qui libero delectus temporibus autem non, sint impedit molestiae aspernatur sequi nam animi cupiditate eum. Voluptates mollitia ea praesentium nulla consequatur magni ipsam, qui, omnis eos, odit corrupti totam voluptate illum numquam minima quibusdam. Tempora officia corrupti ipsum est nesciunt maiores assumenda minus tempore adipisci, saepe quidem quas libero suscipit distinctio at architecto aperiam doloribus facere soluta excepturi veritatis voluptatem voluptatibus, tenetur quo? Est soluta cupiditate inventore culpa voluptates enim. Perspiciatis necessitatibus inventore in.',
		category: 'Breaking',
	},
	{
		title: 'The lone tree, majestic landscape of New Zealand',
		subtitle: 'Lorem ipsum dolor sit amet',
		image: 'https://i.imgur.com/2nCt3Sbl.jpg',
		body:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero praesentium reprehenderit neque inventore sit, eaque quam qui voluptate eligendi, placeat voluptatibus id dolorem autem obcaecati itaque cupiditate fuga deserunt, explicabo ullam ipsa sequi voluptates dolor maxime consequuntur totam! Unde quod repellendus sequi perspiciatis reprehenderit obcaecati explicabo amet ab illo labore. Incidunt sit est amet nobis harum ab distinctio, ex vitae voluptatibus necessitatibus voluptates modi neque eaque facere totam perferendis ad. Id error unde aspernatur eos dolorem fugiat pariatur vitae ullam dolor deleniti corrupti, quam expedita ipsa quos ea quae similique dolorum autem explicabo, doloremque maiores consequuntur sit illum. Corporis molestias, perspiciatis quibusdam, reprehenderit obcaecati esse alias id repellendus porro temporibus illo cupiditate voluptatibus necessitatibus quas, doloremque consequuntur odit laborum officia aliquam distinctio? Error quibusdam corporis ad enim, assumenda perferendis, veniam deserunt dolor impedit sequi sunt, sit quaerat. Dolores, ut, libero! Numquam, debitis quaerat rem repellat tenetur eligendi iure est facere ut aspernatur rerum dolore assumenda dolor! Praesentium fugit expedita unde quae minima error asperiores cupiditate reprehenderit nihil atque aliquid voluptate fugiat aspernatur, quibusdam eligendi quasi! Animi laboriosam vitae enim nemo. Libero explicabo, nostrum assumenda, corporis vero tempora amet voluptas pariatur tenetur aliquam eius, numquam! Magnam inventore quaerat odit provident est.',
		category: 'Breaking',
	},
	{
		title: 'Middle Earth, Germany',
		subtitle: 'Lorem ipsum dolor sit amet',
		image: 'https://i.imgur.com/lceHsT6l.jpg',
		body:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, ex laudantium, impedit, maiores ipsa voluptatem sequi cum repudiandae, tenetur dolorum facilis aspernatur. Eligendi omnis esse dolore tenetur velit, quaerat aperiam! Vero cupiditate ipsum aspernatur autem est cumque fugiat id quis, unde officiis quibusdam a rem laudantium minus vitae, consequuntur earum. Delectus sit architecto nemo, voluptatibus ipsam perspiciatis quo nobis eaque, unde facere nostrum ex inventore fuga ullam iste consectetur dolor eum doloremque atque. Voluptate vero, officia ab repellat esse alias debitis enim. Qui praesentium repellendus officiis animi, velit quis iusto, commodi nesciunt nemo quidem similique consequatur itaque neque temporibus accusamus amet officia ex exercitationem error deleniti unde aliquid expedita. Nisi nemo at necessitatibus quos, cumque excepturi, officiis nihil earum laudantium aliquam voluptatum. Veritatis minima repellat non odit reprehenderit ad eligendi perferendis deserunt modi illo dolores id, quis magni dignissimos, consequatur sint dicta vel reiciendis porro iste ipsam quam perspiciatis! Minus culpa, tenetur facere est consectetur, deleniti repudiandae mollitia perspiciatis veritatis maxime delectus assumenda unde illo, repellat maiores optio molestias consequatur quasi. Possimus sunt, rem! Qui culpa rerum ipsam ipsum dolore iusto quibusdam quidem perspiciatis assumenda illo, inventore dolores fugit architecto maxime praesentium quia vero ratione animi quisquam sint tenetur velit!',
		category: 'Breaking',
	},
];

class News extends Component {
	state = { news: [] };

	componentWillMount() {
		axios.get('https://duranhumes.com/api/mobile/news').then(({ data }) => this.setState({ news: data }));
	}

	_handleNavigation = data => {
		this.props.go('Post', { ...data });
	};

	render() {
		const { row, col, wideCardContainer, smallCardContainer, cardImageContainer, cardImage, date, title, subtitle } = styles;
		return (
			<Container>
				<Content style={{ marginTop: 10 }}>
					{this.state.news.map(item => {
						return (
							<Row style={row} key={item.id}>
								<TouchableOpacity onPress={() => this._handleNavigation(item)} style={wideCardContainer}>
									<Text style={date}>{item.date}</Text>
									<View style={cardImageContainer}>
										<Image style={cardImage} source={{ uri: item.image }} />
									</View>
									<Text style={title}>{item.title}</Text>
									<Text style={subtitle}>{item.subtitle}</Text>
								</TouchableOpacity>
							</Row>
						);
					})}
					{/*<Row style={row}>
						<TouchableOpacity onPress={this._handleNavigation} style={wideCardContainer}>
							<Text style={category}>Breaking</Text>
							<View style={cardImageContainer}>
								<Image style={cardImage} source={{ uri: 'https://i.imgur.com/UYiroysl.jpg' }} />
							</View>
							<Text style={title}>Title goes here</Text>
							<Text style={subtitle}>Subtitle goes right here just wait</Text>
						</TouchableOpacity>
					</Row>
					<Row style={row}>
						<Col style={col}>
							<TouchableOpacity onPress={this._handleNavigation} style={smallCardContainer}>
								<Text style={category}>Breaking</Text>
								<View style={cardImageContainer}>
									<Image style={cardImage} source={{ uri: 'https://i.imgur.com/UYiroysl.jpg' }} />
								</View>
								<Text style={title}>Title goes here</Text>
								<Text style={subtitle}>Subtitle goes right here just wait</Text>
							</TouchableOpacity>
						</Col>
						<Col style={col}>
							<TouchableOpacity onPress={this._handleNavigation} style={smallCardContainer}>
								<Text style={category}>Breaking</Text>
								<View style={cardImageContainer}>
									<Image style={cardImage} source={{ uri: 'https://i.imgur.com/UYiroysl.jpg' }} />
								</View>
								<Text style={title}>Title goes here</Text>
								<Text style={subtitle}>Subtitle goes right here just wait</Text>
							</TouchableOpacity>
						</Col>
					</Row>
					<Row style={row}>
						<TouchableOpacity onPress={this._handleNavigation} style={wideCardContainer}>
							<Text style={category}>Breaking</Text>
							<View style={cardImageContainer}>
								<Image style={cardImage} source={{ uri: 'https://i.imgur.com/UYiroysl.jpg' }} />
							</View>
							<Text style={title}>Title goes here</Text>
							<Text style={subtitle}>Subtitle goes right here just wait</Text>
						</TouchableOpacity>
					</Row>
					<Row style={row}>
						<Col style={col}>
							<TouchableOpacity onPress={this._handleNavigation} style={smallCardContainer}>
								<Text style={category}>Breaking</Text>
								<View style={cardImageContainer}>
									<Image style={cardImage} source={{ uri: 'https://i.imgur.com/UYiroysl.jpg' }} />
								</View>
								<Text style={title}>Title goes here</Text>
								<Text style={subtitle}>Subtitle goes right here just wait</Text>
							</TouchableOpacity>
						</Col>
						<Col style={col}>
							<TouchableOpacity onPress={this._handleNavigation} style={smallCardContainer}>
								<Text style={category}>Breaking</Text>
								<View style={cardImageContainer}>
									<Image style={cardImage} source={{ uri: 'https://i.imgur.com/UYiroysl.jpg' }} />
								</View>
								<Text style={title}>Title goes here</Text>
								<Text style={subtitle}>Subtitle goes right here just wait</Text>
							</TouchableOpacity>
						</Col>
					</Row>
					<Row style={row}>
						<TouchableOpacity onPress={this._handleNavigation} style={wideCardContainer}>
							<Text style={category}>Breaking</Text>
							<View style={cardImageContainer}>
								<Image style={cardImage} source={{ uri: 'https://i.imgur.com/UYiroysl.jpg' }} />
							</View>
							<Text style={title}>Title goes here</Text>
							<Text style={subtitle}>Subtitle goes right here just wait</Text>
						</TouchableOpacity>
					</Row>
					<Row style={row}>
						<Col style={col}>
							<TouchableOpacity onPress={this._handleNavigation} style={smallCardContainer}>
								<Text style={category}>Breaking</Text>
								<View style={cardImageContainer}>
									<Image style={cardImage} source={{ uri: 'https://i.imgur.com/UYiroysl.jpg' }} />
								</View>
								<Text style={title}>Title goes here</Text>
								<Text style={subtitle}>Subtitle goes right here just wait</Text>
							</TouchableOpacity>
						</Col>
						<Col style={col}>
							<TouchableOpacity onPress={this._handleNavigation} style={smallCardContainer}>
								<Text style={category}>Breaking</Text>
								<View style={cardImageContainer}>
									<Image style={cardImage} source={{ uri: 'https://i.imgur.com/UYiroysl.jpg' }} />
								</View>
								<Text style={title}>Title goes here</Text>
								<Text style={subtitle}>Subtitle goes right here just wait</Text>
							</TouchableOpacity>
						</Col>
					</Row>*/}
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	row: {
		marginBottom: 17,
		justifyContent: 'space-between',
	},
	col: {
		margin: 0,
		padding: 0,
		justifyContent: 'center',
	},
	wideCardContainer: {
		width: VIEWPORT_WIDTH / 0.8,
		height: 180,
		flex: 1,
		position: 'relative',
		padding: 10,
		elevation: 2,
		marginHorizontal: 10,
		shadowColor: '#000',
		shadowRadius: 5,
		shadowOpacity: 0.3,
		shadowOffset: { x: 2, y: -2 },
		overflow: 'hidden',
	},
	smallCardContainer: {
		width: VIEWPORT_WIDTH / 2.2,
		height: 180,
		flex: 1,
		position: 'relative',
		padding: 10,
		elevation: 2,
		marginHorizontal: 10,
		shadowColor: '#000',
		shadowRadius: 5,
		shadowOpacity: 0.3,
		shadowOffset: { x: 2, y: -2 },
		overflow: 'hidden',
	},
	cardImageContainer: {
		position: 'absolute',
		width: VIEWPORT_WIDTH / 0.8,
		height: 180,
		flex: 1,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: 3,
		opacity: 0.9,
		backgroundColor: 'rgba(0, 0, 0, 0.9)',
	},
	cardImage: {
		position: 'absolute',
		width: VIEWPORT_WIDTH / 0.8,
		height: 180,
		flex: 1,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: 2,
		opacity: 0.4,
	},
	date: {
		position: 'absolute',
		top: 10,
		left: 10,
		zIndex: 5,
		backgroundColor: '#f2f2f2',
		padding: 5,
		paddingHorizontal: 10,
		borderRadius: 100,
	},
	title: {
		position: 'absolute',
		bottom: 40,
		left: 10,
		fontSize: 24,
		color: '#FFF',
		zIndex: 5,
	},
	subtitle: {
		position: 'absolute',
		bottom: 10,
		left: 10,
		fontSize: 14,
		color: '#F2f2f2',
		zIndex: 5,
	},
});

export { News };
