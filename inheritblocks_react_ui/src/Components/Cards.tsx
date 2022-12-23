
import { Button, Loader, MantineProvider, Paper, Text } from '@mantine/core';
import { Grid, Card, Image, Badge, Group } from '@mantine/core';


//import { createStylesServer, ServerStyles } from '@mantine/ssr';

function Cards() {
  return (
    <div className="App">
        <Grid justify="space-around">
            <Grid.Col styles={{maxWdith: 350}} sm={4} xs={4}>
                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                        src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                        height={160}
                        alt="Norway"
                        />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>Norway Fjord Adventures</Text>
                        <Badge color="pink" variant="light">
                        On Sale
                        </Badge>
                    </Group>

                    <Text size="sm" color="dimmed">
                        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                        activities on and around the fjords of Norway
                    </Text>

                    <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                        Book classic tour now
                    </Button>
                </Card>

            </Grid.Col>
            <Grid.Col styles={{maxWdith: 350}} sm={4} xs={4}>
                    <Card shadow="sm" p="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                                height={160}
                                alt="Norway"
                                />
                            </Card.Section>

                            <Group position="apart" mt="md" mb="xs">
                                <Text weight={500}>Norway Fjord Adventures</Text>
                                <Badge color="pink" variant="light">
                                On Sale
                                </Badge>
                            </Group>

                            <Text size="sm" color="dimmed">
                                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                                activities on and around the fjords of Norway
                            </Text>

                            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                                Book classic tour now
                            </Button>
                        </Card>
            </Grid.Col>
            <Grid.Col styles={{maxWdith: 350}} sm={4} xs={4}>
                    <Card shadow="sm" p="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                src="https://plus.unsplash.com/premium_photo-1663133417924-e2d1fca514b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=120"
                                height={160}
                                alt="Norway"
                                />
                            </Card.Section>

                            <Group position="apart" mt="md" mb="xs">
                                <Text weight={500}>Norway Fjord Adventures</Text>
                                <Badge color="pink" variant="light">
                                On Sale
                                </Badge>
                            </Group>

                            <Text size="sm" color="dimmed">
                                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                                activities on and around the fjords of Norway
                            </Text>

                            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                                Book classic tour now
                            </Button>
                        </Card>
            </Grid.Col>
    

        </Grid>
     
    </div>
  );
} 

export default Cards;
