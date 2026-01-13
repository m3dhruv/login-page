import {
    TextInput,
    PasswordInput,
    Title,
    Text,
    Button,
    createStyles,
    rem,
    Group,
    Divider,
    ActionIcon,
    Checkbox,
    Anchor,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import {
    IconBrandGoogle,
    IconBrandApple,
    IconBrandFacebook,
    IconAt,
    IconEye,
    IconEyeOff
} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        maxWidth: rem(1000), // Slightly clearer max-width
        minHeight: rem(650),
        backgroundColor: theme.white,
        borderRadius: rem(40), // Large pill-ish corners for the card
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',

        [theme.fn.smallerThan('md')]: {
            flexDirection: 'column',
            minHeight: 'auto',
            borderRadius: rem(20),
        },
    },

    leftPanel: {
        flex: '1', // Form takes more space or equal
        padding: rem(60),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

        [theme.fn.smallerThan('sm')]: {
            padding: rem(30),
        },
    },

    rightPanel: {
        flex: '0 0 50%', // Half width
        position: 'relative',
        margin: rem(15), // Gap from the main container edges for the floating look
        borderRadius: rem(30),
        overflow: 'hidden',
        // Accounting Image
        backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    // Form Typography
    welcomeTitle: {
        fontFamily: `Inter, ${theme.fontFamily}`,
        fontSize: rem(32),
        fontWeight: 800,
        color: '#111827',
        textAlign: 'center',
        marginBottom: rem(10),
    },

    subTitle: {
        textAlign: 'center',
        color: '#6B7280',
        marginBottom: rem(40),
        fontSize: rem(15),
    },

    // Pill Inputs
    input: {
        height: rem(50),
        backgroundColor: theme.colors.gray[0],
        border: `${rem(1)} solid ${theme.colors.gray[2]}`,
        borderRadius: rem(50),
        paddingLeft: rem(20),
        paddingRight: rem(20),
        fontSize: rem(15),
        transition: 'all 0.2s',

        '&:focus': {
            backgroundColor: theme.white,
            borderColor: '#1A2BD9', // Primary Blue
            boxShadow: '0 0 0 4px rgba(26, 43, 217, 0.1)',
        }
    },

    // Pill Button
    loginButton: {
        backgroundColor: '#1A2BD9', // Primary Blue
        height: rem(50),
        borderRadius: rem(50),
        fontSize: rem(16),
        fontWeight: 600,
        transition: 'all 0.2s',
        '&:hover': {
            backgroundColor: '#1e40af',
            transform: 'translateY(-1px)',
            boxShadow: '0 10px 20px rgba(26, 43, 217, 0.2)',
        }
    },

    socialButton: {
        width: rem(50),
        height: rem(50),
        borderRadius: '50%',
        border: `${rem(1)} solid ${theme.colors.gray[2]}`,
        color: theme.colors.gray[6],
        backgroundColor: theme.white,
        transition: 'all 0.2s',
        '&:hover': {
            borderColor: '#1A2BD9',
            color: '#1A2BD9',
            backgroundColor: theme.colors.gray[0],
        }
    },

    iconHome: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: rem(15),
        fontSize: rem(40)
    }

}));

export function AuthenticationImage() {
    const { classes } = useStyles();

    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },
    });

    return (
        <div className={classes.container}>
            {/* Left Panel - Form */}
            <div className={classes.leftPanel}>
                <div className={classes.iconHome}>
                    🏠
                </div>
                <Title className={classes.welcomeTitle}>
                    Welcome home
                </Title>
                <Text className={classes.subTitle}>
                    Please enter your details.
                </Text>

                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <TextInput
                        placeholder="Email"
                        size="md"
                        mb="md"
                        radius="xl"
                        rightSection={<IconAt size="1rem" opacity={0.5} />}
                        classNames={{ input: classes.input }}
                        {...form.getInputProps('email')}
                    />

                    <PasswordInput
                        placeholder="Password"
                        mt="md"
                        size="md"
                        mb="xs"
                        radius="xl"
                        visibilityToggleIcon={({ reveal }) =>
                            reveal ? <IconEyeOff size="1rem" opacity={0.5} /> : <IconEye size="1rem" opacity={0.5} />
                        }
                        classNames={{ input: classes.input, innerInput: classes.input }}
                        {...form.getInputProps('password')}
                    />

                    <Group position="apart" mt="md" mb="xl">
                        <div></div>
                        <Anchor component="button" size="xs" color="dimmed" sx={{ fontWeight: 500 }}>
                            Forgot password?
                        </Anchor>
                    </Group>

                    <Button fullWidth size="md" type="submit" className={classes.loginButton}>
                        Login
                    </Button>


                </form>
            </div>

            {/* Right Panel - Accounting Image */}
            <div className={classes.rightPanel} />
        </div>
    );
}

export default AuthenticationImage;
